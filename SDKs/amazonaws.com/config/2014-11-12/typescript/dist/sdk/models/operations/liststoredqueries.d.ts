import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStoredQueriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListStoredQueriesXAmzTargetEnum {
    StarlingDoveServiceListStoredQueries = "StarlingDoveService.ListStoredQueries"
}
export declare class ListStoredQueriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStoredQueriesXAmzTargetEnum;
}
export declare class ListStoredQueriesRequest extends SpeakeasyBase {
    queryParams: ListStoredQueriesQueryParams;
    headers: ListStoredQueriesHeaders;
    request: shared.ListStoredQueriesRequest;
}
export declare class ListStoredQueriesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listStoredQueriesResponse?: shared.ListStoredQueriesResponse;
    statusCode: number;
    validationException?: any;
}
