import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" })
  virtualRouterName: string;
}


export class CreateRouteHeaders extends SpeakeasyBase {
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
}


// CreateRouteRequestBodySpec
/** 
 * An object representing the specification of a route.
**/
export class CreateRouteRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpRoute;
}


export class CreateRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routeName" })
  routeName: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateRouteRequestBodySpec;
}


export class CreateRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRoutePathParams;

  @SpeakeasyMetadata()
  headers: CreateRouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRouteRequestBody;
}


export class CreateRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRouteOutput?: shared.CreateRouteOutput;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
