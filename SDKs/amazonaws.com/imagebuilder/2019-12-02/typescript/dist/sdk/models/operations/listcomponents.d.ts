import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListComponentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListComponentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListComponentsRequestBodyOwnerEnum {
    Self = "Self",
    Shared = "Shared",
    Amazon = "Amazon"
}
export declare class ListComponentsRequestBody extends SpeakeasyBase {
    byName?: boolean;
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
    owner?: ListComponentsRequestBodyOwnerEnum;
}
export declare class ListComponentsRequest extends SpeakeasyBase {
    queryParams: ListComponentsQueryParams;
    headers: ListComponentsHeaders;
    request: ListComponentsRequestBody;
}
export declare class ListComponentsResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listComponentsResponse?: shared.ListComponentsResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
