import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoutePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
}
export declare class GetRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRouteRequest extends SpeakeasyBase {
    pathParams: GetRoutePathParams;
    headers: GetRouteHeaders;
}
export declare class GetRouteResponse extends SpeakeasyBase {
    contentType: string;
    getRouteResult?: shared.GetRouteResult;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
