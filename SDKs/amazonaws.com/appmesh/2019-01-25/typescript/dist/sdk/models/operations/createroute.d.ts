import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRoutePathParams extends SpeakeasyBase {
    meshName: string;
    virtualRouterName: string;
}
export declare class CreateRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class CreateRouteHeaders extends SpeakeasyBase {
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
export declare class CreateRouteRequestBodySpec extends SpeakeasyBase {
    grpcRoute?: shared.GrpcRoute;
    http2Route?: shared.HttpRoute;
    httpRoute?: shared.HttpRoute;
    priority?: number;
    tcpRoute?: shared.TcpRoute;
}
export declare class CreateRouteRequestBody extends SpeakeasyBase {
    clientToken?: string;
    routeName: string;
    spec: CreateRouteRequestBodySpec;
    tags?: shared.TagRef[];
}
export declare class CreateRouteRequest extends SpeakeasyBase {
    pathParams: CreateRoutePathParams;
    queryParams: CreateRouteQueryParams;
    headers: CreateRouteHeaders;
    request: CreateRouteRequestBody;
}
export declare class CreateRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createRouteOutput?: shared.CreateRouteOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
