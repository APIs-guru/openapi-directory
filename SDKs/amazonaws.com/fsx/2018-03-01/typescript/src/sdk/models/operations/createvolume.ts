import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301CreateVolume = "AWSSimbaAPIService_v20180301.CreateVolume"
}


export class CreateVolumeHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateVolumeXAmzTargetEnum;
}


export class CreateVolumeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateVolumeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateVolumeRequest;
}


export class CreateVolumeResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVolumeResponse?: shared.CreateVolumeResponse;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  missingVolumeConfiguration?: any;

  @Metadata()
  serviceLimitExceeded?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  storageVirtualMachineNotFound?: any;

  @Metadata()
  unsupportedOperation?: any;
}
