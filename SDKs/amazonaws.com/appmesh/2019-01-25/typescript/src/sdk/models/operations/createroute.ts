import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" })
  virtualRouterName: string;
}


export class CreateRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
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
 * An object that represents a route specification. Specify one route type.
**/
export class CreateRouteRequestBodySpec extends SpeakeasyBase {
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


export class CreateRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=routeName" })
  routeName: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateRouteRequestBodySpec;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];
}


export class CreateRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateRouteQueryParams;

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
