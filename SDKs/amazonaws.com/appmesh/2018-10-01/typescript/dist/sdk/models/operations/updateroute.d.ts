import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoutePathParams extends SpeakeasyBase {
    meshName: string;
    routeName: string;
    virtualRouterName: string;
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
 * An object representing the specification of a route.
**/
export declare class UpdateRouteRequestBodySpec extends SpeakeasyBase {
    httpRoute?: shared.HttpRoute;
}
export declare class UpdateRouteRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateRouteRequestBodySpec;
}
export declare class UpdateRouteRequest extends SpeakeasyBase {
    pathParams: UpdateRoutePathParams;
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
