import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGatewayRoutePathParams extends SpeakeasyBase {
    meshName: string;
    virtualGatewayName: string;
}
export declare class CreateGatewayRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class CreateGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents a gateway route specification. Specify one gateway route type.
**/
export declare class CreateGatewayRouteRequestBodySpec extends SpeakeasyBase {
    grpcRoute?: shared.GrpcGatewayRoute;
    http2Route?: shared.HttpGatewayRoute;
    httpRoute?: shared.HttpGatewayRoute;
    priority?: number;
}
export declare class CreateGatewayRouteRequestBody extends SpeakeasyBase {
    clientToken?: string;
    gatewayRouteName: string;
    spec: CreateGatewayRouteRequestBodySpec;
    tags?: shared.TagRef[];
}
export declare class CreateGatewayRouteRequest extends SpeakeasyBase {
    pathParams: CreateGatewayRoutePathParams;
    queryParams: CreateGatewayRouteQueryParams;
    headers: CreateGatewayRouteHeaders;
    request: CreateGatewayRouteRequestBody;
}
export declare class CreateGatewayRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createGatewayRouteOutput?: shared.CreateGatewayRouteOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
