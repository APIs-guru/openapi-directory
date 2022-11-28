import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccessPreviewsQueryParams extends SpeakeasyBase {
    analyzerArn: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListAccessPreviewsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAccessPreviewsRequest extends SpeakeasyBase {
    queryParams: ListAccessPreviewsQueryParams;
    headers: ListAccessPreviewsHeaders;
}
export declare class ListAccessPreviewsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAccessPreviewsResponse?: shared.ListAccessPreviewsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
