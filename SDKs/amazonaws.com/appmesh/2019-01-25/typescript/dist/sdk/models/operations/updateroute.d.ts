import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoutePathParams extends SpeakeasyBase {
    meshName: string;
    routeName: string;
    virtualRouterName: string;
}
export declare class UpdateRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class UpdateRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents a route specification. Specify one route type.
**/
export declare class UpdateRouteRequestBodySpec extends SpeakeasyBase {
    grpcRoute?: shared.GrpcRoute;
    http2Route?: shared.HttpRoute;
    httpRoute?: shared.HttpRoute;
    priority?: number;
    tcpRoute?: shared.TcpRoute;
}
export declare class UpdateRouteRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateRouteRequestBodySpec;
}
export declare class UpdateRouteRequest extends SpeakeasyBase {
    pathParams: UpdateRoutePathParams;
    queryParams: UpdateRouteQueryParams;
    headers: UpdateRouteHeaders;
    request: UpdateRouteRequestBody;
}
export declare class UpdateRouteResponse extends SpeakeasyBase {
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
    updateRouteOutput?: shared.UpdateRouteOutput;
}
