import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRouteResponsesPathParams extends SpeakeasyBase {
    apiId: string;
    routeId: string;
}
export declare class GetRouteResponsesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetRouteResponsesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRouteResponsesRequest extends SpeakeasyBase {
    pathParams: GetRouteResponsesPathParams;
    queryParams: GetRouteResponsesQueryParams;
    headers: GetRouteResponsesHeaders;
}
export declare class GetRouteResponsesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getRouteResponsesResponse?: shared.GetRouteResponsesResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
