import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGatewayRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gatewayRouteName" })
  gatewayRouteName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class UpdateGatewayRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class UpdateGatewayRouteHeaders extends SpeakeasyBase {
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


// UpdateGatewayRouteRequestBodySpec
/** 
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export class UpdateGatewayRouteRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpcRoute" })
  grpcRoute?: shared.GrpcGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=http2Route" })
  http2Route?: shared.HttpGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;
}


export class UpdateGatewayRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: UpdateGatewayRouteRequestBodySpec;
}


export class UpdateGatewayRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGatewayRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateGatewayRouteQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateGatewayRouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateGatewayRouteRequestBody;
}


export class UpdateGatewayRouteResponse extends SpeakeasyBase {
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
  updateGatewayRouteOutput?: shared.UpdateGatewayRouteOutput;
}
