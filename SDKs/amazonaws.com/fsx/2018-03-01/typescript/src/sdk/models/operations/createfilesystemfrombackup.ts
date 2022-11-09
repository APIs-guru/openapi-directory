import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFileSystemFromBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateFileSystemFromBackup = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"
}


export class CreateFileSystemFromBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFileSystemFromBackupXAmzTargetEnum;
}


export class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFileSystemFromBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFileSystemFromBackupRequest;
}


export class CreateFileSystemFromBackupResponse extends SpeakeasyBase {
  @Metadata()
  activeDirectoryError?: any;

  @Metadata()
  backupNotFound?: any;

  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createFileSystemFromBackupResponse?: shared.CreateFileSystemFromBackupResponse;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNetworkSettings?: any;

  @Metadata()
  invalidPerUnitStorageThroughput?: any;

  @Metadata()
  missingFileSystemConfiguration?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;
}
