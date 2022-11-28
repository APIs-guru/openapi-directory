import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGatewayRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meshName" })
  meshName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualGatewayName" })
  virtualGatewayName: string;
}


export class CreateGatewayRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshOwner" })
  meshOwner?: string;
}


export class CreateGatewayRouteHeaders extends SpeakeasyBase {
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


// CreateGatewayRouteRequestBodySpec
/** 
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export class CreateGatewayRouteRequestBodySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grpcRoute" })
  grpcRoute?: shared.GrpcGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=http2Route" })
  http2Route?: shared.HttpGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=httpRoute" })
  httpRoute?: shared.HttpGatewayRoute;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;
}


export class CreateGatewayRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayRouteName" })
  gatewayRouteName: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec: CreateGatewayRouteRequestBodySpec;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags?: shared.TagRef[];
}


export class CreateGatewayRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateGatewayRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateGatewayRouteQueryParams;

  @SpeakeasyMetadata()
  headers: CreateGatewayRouteHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateGatewayRouteRequestBody;
}


export class CreateGatewayRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createGatewayRouteOutput?: shared.CreateGatewayRouteOutput;

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
