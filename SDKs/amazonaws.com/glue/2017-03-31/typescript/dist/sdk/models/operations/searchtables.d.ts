import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchTablesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchTablesXAmzTargetEnum {
    AwsGlueSearchTables = "AWSGlue.SearchTables"
}
export declare class SearchTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchTablesXAmzTargetEnum;
}
export declare class SearchTablesRequest extends SpeakeasyBase {
    queryParams: SearchTablesQueryParams;
    headers: SearchTablesHeaders;
    request: shared.SearchTablesRequest;
}
export declare class SearchTablesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    searchTablesResponse?: shared.SearchTablesResponse;
    statusCode: number;
}
