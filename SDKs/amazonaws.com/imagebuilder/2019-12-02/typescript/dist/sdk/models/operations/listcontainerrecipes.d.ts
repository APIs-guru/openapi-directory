import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListContainerRecipesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListContainerRecipesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListContainerRecipesRequestBodyOwnerEnum {
    Self = "Self",
    Shared = "Shared",
    Amazon = "Amazon"
}
export declare class ListContainerRecipesRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    owner?: ListContainerRecipesRequestBodyOwnerEnum;
}
export declare class ListContainerRecipesRequest extends SpeakeasyBase {
    queryParams: ListContainerRecipesQueryParams;
    headers: ListContainerRecipesHeaders;
    request: ListContainerRecipesRequestBody;
}
export declare class ListContainerRecipesResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listContainerRecipesResponse?: shared.ListContainerRecipesResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
