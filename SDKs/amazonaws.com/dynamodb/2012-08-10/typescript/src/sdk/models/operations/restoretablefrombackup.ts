import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RestoreTableFromBackupXAmzTargetEnum {
    DynamoDb20120810RestoreTableFromBackup = "DynamoDB_20120810.RestoreTableFromBackup"
}


export class RestoreTableFromBackupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RestoreTableFromBackupXAmzTargetEnum;
}


export class RestoreTableFromBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestoreTableFromBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RestoreTableFromBackupInput;
}


export class RestoreTableFromBackupResponse extends SpeakeasyBase {
  @Metadata()
  backupInUseException?: any;

  @Metadata()
  backupNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  restoreTableFromBackupOutput?: shared.RestoreTableFromBackupOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableAlreadyExistsException?: any;

  @Metadata()
  tableInUseException?: any;
}
