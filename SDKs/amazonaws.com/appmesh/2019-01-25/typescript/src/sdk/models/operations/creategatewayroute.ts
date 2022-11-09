import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGatewayRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class CreateGatewayRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateGatewayRouteHeaders extends SpeakeasyBase {
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


// CreateGatewayRouteRequestBodySpec
/** 
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export class CreateGatewayRouteRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpcRoute" })
  grpcRoute?: shared.GrpcGatewayRoute;

  @Metadata({ data: "json, name=http2Route" })
  http2Route?: shared.HttpGatewayRoute;

  @Metadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpGatewayRoute;

  @Metadata({ data: "json, name=priority" })
  priority?: number;
}


export class CreateGatewayRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=gatewayRouteName" })
  gatewayRouteName: string;

  @Metadata({ data: "json, name=spec" })
  spec: CreateGatewayRouteRequestBodySpec;

  @Metadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];
}


export class CreateGatewayRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateGatewayRoutePathParams;

  @Metadata()
  queryParams: CreateGatewayRouteQueryParams;

  @Metadata()
  headers: CreateGatewayRouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateGatewayRouteRequestBody;
}


export class CreateGatewayRouteResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createGatewayRouteOutput?: shared.CreateGatewayRouteOutput;

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
