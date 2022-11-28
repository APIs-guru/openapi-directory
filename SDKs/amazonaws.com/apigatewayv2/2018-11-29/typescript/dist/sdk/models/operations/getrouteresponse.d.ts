import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRouteResponsePathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
    routeResponseId: string;
}
export declare class GetRouteResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRouteResponseRequest extends SpeakeasyBase {
    pathParams: GetRouteResponsePathParams;
    headers: GetRouteResponseHeaders;
}
export declare class GetRouteResponseResponse extends SpeakeasyBase {
    contentType: string;
    getRouteResponseResponse?: shared.GetRouteResponseResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
