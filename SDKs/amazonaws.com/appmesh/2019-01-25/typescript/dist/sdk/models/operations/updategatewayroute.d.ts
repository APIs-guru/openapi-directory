import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGatewayRoutePathParams extends SpeakeasyBase {
    gatewayRouteName: string;
    meshName: string;
    virtualGatewayName: string;
}
export declare class UpdateGatewayRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class UpdateGatewayRouteHeaders extends SpeakeasyBase {
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
export declare class UpdateGatewayRouteRequestBodySpec extends SpeakeasyBase {
    grpcRoute?: shared.GrpcGatewayRoute;
    http2Route?: shared.HttpGatewayRoute;
    httpRoute?: shared.HttpGatewayRoute;
    priority?: number;
}
export declare class UpdateGatewayRouteRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateGatewayRouteRequestBodySpec;
}
export declare class UpdateGatewayRouteRequest extends SpeakeasyBase {
    pathParams: UpdateGatewayRoutePathParams;
    queryParams: UpdateGatewayRouteQueryParams;
    headers: UpdateGatewayRouteHeaders;
    request: UpdateGatewayRouteRequestBody;
}
export declare class UpdateGatewayRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateGatewayRouteOutput?: shared.UpdateGatewayRouteOutput;
}
