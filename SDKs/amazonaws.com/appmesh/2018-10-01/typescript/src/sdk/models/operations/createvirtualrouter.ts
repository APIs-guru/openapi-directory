import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVirtualRouterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;
}


export class CreateVirtualRouterHeaders extends SpeakeasyBase {
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


// CreateVirtualRouterRequestBodySpec
/** 
 * An object representing the specification of a virtual router.
**/
export class CreateVirtualRouterRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceNames" })
  serviceNames?: string[];
}


export class CreateVirtualRouterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: CreateVirtualRouterRequestBodySpec;

  @Metadata({ data: "json, name=virtualRouterName" })
  virtualRouterName: string;
}


export class CreateVirtualRouterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVirtualRouterPathParams;

  @Metadata()
  headers: CreateVirtualRouterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVirtualRouterRequestBody;
}


export class CreateVirtualRouterResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVirtualRouterOutput?: shared.CreateVirtualRouterOutput;

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
}
