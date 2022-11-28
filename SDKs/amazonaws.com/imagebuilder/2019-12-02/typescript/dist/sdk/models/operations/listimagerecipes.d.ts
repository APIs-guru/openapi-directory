import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImageRecipesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImageRecipesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListImageRecipesRequestBodyOwnerEnum {
    Self = "Self",
    Shared = "Shared",
    Amazon = "Amazon"
}
export declare class ListImageRecipesRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    owner?: ListImageRecipesRequestBodyOwnerEnum;
}
export declare class ListImageRecipesRequest extends SpeakeasyBase {
    queryParams: ListImageRecipesQueryParams;
    headers: ListImageRecipesHeaders;
    request: ListImageRecipesRequestBody;
}
export declare class ListImageRecipesResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listImageRecipesResponse?: shared.ListImageRecipesResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
