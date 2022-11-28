import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSuiteRunsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    suiteDefinitionId?: string;
    suiteDefinitionVersion?: string;
}
export declare class ListSuiteRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSuiteRunsRequest extends SpeakeasyBase {
    queryParams: ListSuiteRunsQueryParams;
    headers: ListSuiteRunsHeaders;
}
export declare class ListSuiteRunsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listSuiteRunsResponse?: shared.ListSuiteRunsResponse;
    statusCode: number;
    validationException?: any;
}
