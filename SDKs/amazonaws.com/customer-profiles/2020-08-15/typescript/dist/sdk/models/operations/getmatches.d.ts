import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMatchesPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetMatchesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetMatchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMatchesRequest extends SpeakeasyBase {
    pathParams: GetMatchesPathParams;
    queryParams: GetMatchesQueryParams;
    headers: GetMatchesHeaders;
}
export declare class GetMatchesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    getMatchesResponse?: shared.GetMatchesResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
