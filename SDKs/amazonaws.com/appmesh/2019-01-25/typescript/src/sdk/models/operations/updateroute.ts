import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routeName" })
  routeName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" })
  virtualRouterName: string;
}


export class UpdateRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class UpdateRouteHeaders extends SpeakeasyBase {
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


// UpdateRouteRequestBodySpec
/** 
 * An object that represents a route specification. Specify one route type.
**/
export class UpdateRouteRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpcRoute" })
  grpcRoute?: shared.GrpcRoute;

  @SpeakeasyMetadata({ data: "json, name=http2Route" })
  http2Route?: shared.HttpRoute;

  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpRoute;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=tcpRoute" })
  tcpRoute?: shared.TcpRoute;
}


export class UpdateRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: UpdateRouteRequestBodySpec;
}


export class UpdateRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateRouteQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateRouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateRouteRequestBody;
}


export class UpdateRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

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

  @SpeakeasyMetadata()
  updateRouteOutput?: shared.UpdateRouteOutput;
}
