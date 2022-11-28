import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListComponentBuildVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListComponentBuildVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListComponentBuildVersionsRequestBody extends SpeakeasyBase {
    componentVersionArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListComponentBuildVersionsRequest extends SpeakeasyBase {
    queryParams: ListComponentBuildVersionsQueryParams;
    headers: ListComponentBuildVersionsHeaders;
    request: ListComponentBuildVersionsRequestBody;
}
export declare class ListComponentBuildVersionsResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listComponentBuildVersionsResponse?: shared.ListComponentBuildVersionsResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
