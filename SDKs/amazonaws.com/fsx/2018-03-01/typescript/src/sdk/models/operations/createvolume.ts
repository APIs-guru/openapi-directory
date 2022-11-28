import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateVolume = "AWSSimbaAPIService_v20180301.CreateVolume"
}


export class CreateVolumeHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateVolumeXAmzTargetEnum;
}


export class CreateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateVolumeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateVolumeRequest;
}


export class CreateVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequest?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVolumeResponse?: shared.CreateVolumeResponse;

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

  @SpeakeasyMetadata()
  unsupportedOperation?: any;
}
