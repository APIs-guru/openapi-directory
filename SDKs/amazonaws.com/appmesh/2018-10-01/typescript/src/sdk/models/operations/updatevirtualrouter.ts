import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVirtualRouterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" })
  virtualRouterName: string;
}


export class UpdateVirtualRouterHeaders extends SpeakeasyBase {
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
}


// UpdateVirtualRouterRequestBodySpec
/** 
 * An object representing the specification of a virtual router.
**/
export class UpdateVirtualRouterRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceNames" })
  serviceNames?: string[];
}


export class UpdateVirtualRouterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: UpdateVirtualRouterRequestBodySpec;
}


export class UpdateVirtualRouterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVirtualRouterPathParams;

  @Metadata()
  headers: UpdateVirtualRouterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateVirtualRouterRequestBody;
}


export class UpdateVirtualRouterResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateVirtualRouterOutput?: shared.UpdateVirtualRouterOutput;
}
