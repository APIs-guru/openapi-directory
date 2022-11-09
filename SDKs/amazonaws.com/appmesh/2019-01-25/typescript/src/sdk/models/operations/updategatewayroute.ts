import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGatewayRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gatewayRouteName" })
  gatewayRouteName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class UpdateGatewayRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class UpdateGatewayRouteHeaders extends SpeakeasyBase {
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


// UpdateGatewayRouteRequestBodySpec
/** 
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export class UpdateGatewayRouteRequestBodySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=grpcRoute" })
  grpcRoute?: shared.GrpcGatewayRoute;

  @Metadata({ data: "json, name=http2Route" })
  http2Route?: shared.HttpGatewayRoute;

  @Metadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpGatewayRoute;

  @Metadata({ data: "json, name=priority" })
  priority?: number;
}


export class UpdateGatewayRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=spec" })
  spec: UpdateGatewayRouteRequestBodySpec;
}


export class UpdateGatewayRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGatewayRoutePathParams;

  @Metadata()
  queryParams: UpdateGatewayRouteQueryParams;

  @Metadata()
  headers: UpdateGatewayRouteHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateGatewayRouteRequestBody;
}


export class UpdateGatewayRouteResponse extends SpeakeasyBase {
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
  updateGatewayRouteOutput?: shared.UpdateGatewayRouteOutput;
}
