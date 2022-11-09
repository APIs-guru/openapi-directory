import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualRouterName" })
  virtualRouterName: string;
}


export class CreateRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateRouteHeaders extends SpeakeasyBase {
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


// CreateRouteRequestBodySpec
/** 
 * An object that represents a route specification. Specify one route type.
**/
export class CreateRouteRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpcRoute" })
  grpcRoute?: shared.GrpcRoute;

  @Metadata({ data: "json, name=http2Route" })
  http2Route?: shared.HttpRoute;

  @Metadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpRoute;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=tcpRoute" })
  tcpRoute?: shared.TcpRoute;
}


export class CreateRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=routeName" })
  routeName: string;

  @Metadata({ data: "json, name=spec" })
  spec: CreateRouteRequestBodySpec;

  @Metadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];
}


export class CreateRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateRoutePathParams;

  @Metadata()
  queryParams: CreateRouteQueryParams;

  @Metadata()
  headers: CreateRouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRouteRequestBody;
}


export class CreateRouteResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createRouteOutput?: shared.CreateRouteOutput;

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
