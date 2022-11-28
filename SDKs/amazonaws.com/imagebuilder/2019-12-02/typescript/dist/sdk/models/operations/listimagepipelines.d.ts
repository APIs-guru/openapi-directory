import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImagePipelinesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImagePipelinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListImagePipelinesRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListImagePipelinesRequest extends SpeakeasyBase {
    queryParams: ListImagePipelinesQueryParams;
    headers: ListImagePipelinesHeaders;
    request: ListImagePipelinesRequestBody;
}
export declare class ListImagePipelinesResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listImagePipelinesResponse?: shared.ListImagePipelinesResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
