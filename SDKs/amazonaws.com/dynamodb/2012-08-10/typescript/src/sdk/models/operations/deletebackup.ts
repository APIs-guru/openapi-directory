import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteBackupXAmzTargetEnum {
    DynamoDb20120810DeleteBackup = "DynamoDB_20120810.DeleteBackup"
}


export class DeleteBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteBackupXAmzTargetEnum;
}


export class DeleteBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteBackupInput;
}


export class DeleteBackupResponse extends SpeakeasyBase {
  @Metadata()
  backupInUseException?: any;

  @Metadata()
  backupNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteBackupOutput?: shared.DeleteBackupOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
