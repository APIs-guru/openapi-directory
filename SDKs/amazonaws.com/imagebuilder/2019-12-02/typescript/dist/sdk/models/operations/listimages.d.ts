import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListImagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListImagesRequestBodyOwnerEnum {
    Self = "Self",
    Shared = "Shared",
    Amazon = "Amazon"
}
export declare class ListImagesRequestBody extends SpeakeasyBase {
    byName?: boolean;
    filters?: shared.Filter[];
    includeDeprecated?: boolean;
    maxResults?: number;
    nextToken?: string;
    owner?: ListImagesRequestBodyOwnerEnum;
}
export declare class ListImagesRequest extends SpeakeasyBase {
    queryParams: ListImagesQueryParams;
    headers: ListImagesHeaders;
    request: ListImagesRequestBody;
}
export declare class ListImagesResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listImagesResponse?: shared.ListImagesResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
