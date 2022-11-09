import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateBackupXAmzTargetEnum {
    DynamoDb20120810CreateBackup = "DynamoDB_20120810.CreateBackup"
}


export class CreateBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateBackupXAmzTargetEnum;
}


export class CreateBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBackupInput;
}


export class CreateBackupResponse extends SpeakeasyBase {
  @Metadata()
  backupInUseException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  continuousBackupsUnavailableException?: any;

  @Metadata()
  createBackupOutput?: shared.CreateBackupOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableInUseException?: any;

  @Metadata()
  tableNotFoundException?: any;
}
