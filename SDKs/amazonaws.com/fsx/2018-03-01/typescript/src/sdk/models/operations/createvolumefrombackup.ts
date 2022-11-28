import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateVolumeFromBackupXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateVolumeFromBackup = "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup"
}


export class CreateVolumeFromBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateVolumeFromBackupXAmzTargetEnum;
}


export class CreateVolumeFromBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateVolumeFromBackupHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateVolumeFromBackupRequest;
}


export class CreateVolumeFromBackupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backupNotFound?: any;

  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVolumeFromBackupResponse?: shared.CreateVolumeFromBackupResponse;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  incompatibleParameterError?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  missingVolumeConfiguration?: any;

  @SpeakeasyMetadata()
  serviceLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  storageVirtualMachineNotFound?: any;
}
