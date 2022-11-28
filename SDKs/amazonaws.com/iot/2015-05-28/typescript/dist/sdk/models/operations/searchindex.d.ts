import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchIndexRequestBody extends SpeakeasyBase {
    indexName?: string;
    maxResults?: number;
    nextToken?: string;
    queryString: string;
    queryVersion?: string;
}
export declare class SearchIndexRequest extends SpeakeasyBase {
    headers: SearchIndexHeaders;
    request: SearchIndexRequestBody;
}
export declare class SearchIndexResponse extends SpeakeasyBase {
    contentType: string;
    indexNotReadyException?: any;
    internalFailureException?: any;
    invalidQueryException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    searchIndexResponse?: shared.SearchIndexResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
