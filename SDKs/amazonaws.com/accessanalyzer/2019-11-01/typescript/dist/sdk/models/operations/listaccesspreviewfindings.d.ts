import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccessPreviewFindingsPathParams extends SpeakeasyBase {
    accessPreviewId: string;
}
export declare class ListAccessPreviewFindingsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAccessPreviewFindingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAccessPreviewFindingsRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    filter?: Map<string, shared.Criterion>;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAccessPreviewFindingsRequest extends SpeakeasyBase {
    pathParams: ListAccessPreviewFindingsPathParams;
    queryParams: ListAccessPreviewFindingsQueryParams;
    headers: ListAccessPreviewFindingsHeaders;
    request: ListAccessPreviewFindingsRequestBody;
}
export declare class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listAccessPreviewFindingsResponse?: shared.ListAccessPreviewFindingsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
