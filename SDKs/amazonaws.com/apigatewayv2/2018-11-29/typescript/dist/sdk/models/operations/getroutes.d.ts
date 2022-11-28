import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoutesPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetRoutesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRoutesRequest extends SpeakeasyBase {
    pathParams: GetRoutesPathParams;
    queryParams: GetRoutesQueryParams;
    headers: GetRoutesHeaders;
}
export declare class GetRoutesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getRoutesResponse?: shared.GetRoutesResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
