import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateNetworkProfileXAmzTargetEnum {
    DeviceFarm20150623UpdateNetworkProfile = "DeviceFarm_20150623.UpdateNetworkProfile"
}


export class UpdateNetworkProfileHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateNetworkProfileXAmzTargetEnum;
}


export class UpdateNetworkProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateNetworkProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateNetworkProfileRequest;
}


export class UpdateNetworkProfileResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkProfileResult?: shared.UpdateNetworkProfileResult;
}
