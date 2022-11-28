import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIndicesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListIndicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListIndicesRequest extends SpeakeasyBase {
    queryParams: ListIndicesQueryParams;
    headers: ListIndicesHeaders;
}
export declare class ListIndicesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listIndicesResponse?: shared.ListIndicesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
