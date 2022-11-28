import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImageBuildVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImageBuildVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListImageBuildVersionsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    imageVersionArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListImageBuildVersionsRequest extends SpeakeasyBase {
    queryParams: ListImageBuildVersionsQueryParams;
    headers: ListImageBuildVersionsHeaders;
    request: ListImageBuildVersionsRequestBody;
}
export declare class ListImageBuildVersionsResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listImageBuildVersionsResponse?: shared.ListImageBuildVersionsResponse;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
