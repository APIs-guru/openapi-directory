import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RestoreTableFromBackupXAmzTargetEnum {
    DynamoDb20120810RestoreTableFromBackup = "DynamoDB_20120810.RestoreTableFromBackup"
}


export class RestoreTableFromBackupHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RestoreTableFromBackupXAmzTargetEnum;
}


export class RestoreTableFromBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RestoreTableFromBackupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RestoreTableFromBackupInput;
}


export class RestoreTableFromBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backupInUseException?: any;

  @SpeakeasyMetadata()
  backupNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  restoreTableFromBackupOutput?: shared.RestoreTableFromBackupOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tableAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  tableInUseException?: any;
}
