import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateBackup = "AWSSimbaAPIService_v20180301.CreateBackup"
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
  request: shared.CreateBackupRequest;
}


export class CreateBackupResponse extends SpeakeasyBase {
  @Metadata()
  backupInProgress?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBackupResponse?: shared.CreateBackupResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedOperation?: any;

  @Metadata()
  volumeNotFound?: any;
}
