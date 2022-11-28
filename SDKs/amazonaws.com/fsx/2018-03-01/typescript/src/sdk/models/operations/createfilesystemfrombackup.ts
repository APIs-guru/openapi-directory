import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateFileSystemFromBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateFileSystemFromBackup = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"
}


export class CreateFileSystemFromBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateFileSystemFromBackupXAmzTargetEnum;
}


export class CreateFileSystemFromBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateFileSystemFromBackupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateFileSystemFromBackupRequest;
}


export class CreateFileSystemFromBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activeDirectoryError?: any;

  @SpeakeasyMetadata()
  backupNotFound?: any;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFileSystemFromBackupResponse?: shared.CreateFileSystemFromBackupResponse;

  @SpeakeasyMetadata()
  incompatibleParameterError?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidNetworkSettings?: any;

  @SpeakeasyMetadata()
  invalidPerUnitStorageThroughput?: any;

  @SpeakeasyMetadata()
  missingFileSystemConfiguration?: any;

  @SpeakeasyMetadata()
  serviceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
