import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFindingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The criteria used to sort.
**/
export declare class ListFindingsRequestBodySort extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class ListFindingsRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    filter?: Map<string, shared.Criterion>;
    maxResults?: number;
    nextToken?: string;
    sort?: ListFindingsRequestBodySort;
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    queryParams: ListFindingsQueryParams;
    headers: ListFindingsHeaders;
    request: ListFindingsRequestBody;
}
export declare class ListFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listFindingsResponse?: shared.ListFindingsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
