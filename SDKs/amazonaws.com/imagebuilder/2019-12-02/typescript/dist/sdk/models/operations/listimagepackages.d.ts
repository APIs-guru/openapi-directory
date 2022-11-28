import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImagePackagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListImagePackagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListImagePackagesRequestBody extends SpeakeasyBase {
    imageBuildVersionArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListImagePackagesRequest extends SpeakeasyBase {
    queryParams: ListImagePackagesQueryParams;
    headers: ListImagePackagesHeaders;
    request: ListImagePackagesRequestBody;
}
export declare class ListImagePackagesResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    invalidPaginationTokenException?: any;
    invalidRequestException?: any;
    listImagePackagesResponse?: shared.ListImagePackagesResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
