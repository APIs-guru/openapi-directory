import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UpdateVolume = "AWSSimbaAPIService_v20180301.UpdateVolume"
}


export class UpdateVolumeHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateVolumeXAmzTargetEnum;
}


export class UpdateVolumeRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateVolumeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateVolumeRequest;
}


export class UpdateVolumeResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  missingVolumeConfiguration?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateVolumeResponse?: shared.UpdateVolumeResponse;

  @Metadata()
  volumeNotFound?: any;
}
