import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchProfilesPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class SearchProfilesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class SearchProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchProfilesRequestBody extends SpeakeasyBase {
    keyName: string;
    values: string[];
}
export declare class SearchProfilesRequest extends SpeakeasyBase {
    pathParams: SearchProfilesPathParams;
    queryParams: SearchProfilesQueryParams;
    headers: SearchProfilesHeaders;
    request: SearchProfilesRequestBody;
}
export declare class SearchProfilesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    searchProfilesResponse?: shared.SearchProfilesResponse;
    statusCode: number;
    throttlingException?: any;
}
