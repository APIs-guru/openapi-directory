import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteVolumeXAmzTargetEnum {
    AwsSimbaApiServiceV20180301DeleteVolume = "AWSSimbaAPIService_v20180301.DeleteVolume"
}


export class DeleteVolumeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteVolumeXAmzTargetEnum;
}


export class DeleteVolumeRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteVolumeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteVolumeRequest;
}


export class DeleteVolumeResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteVolumeResponse?: shared.DeleteVolumeResponse;

  @Metadata()
  incompatibleParameterError?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  volumeNotFound?: any;
}
