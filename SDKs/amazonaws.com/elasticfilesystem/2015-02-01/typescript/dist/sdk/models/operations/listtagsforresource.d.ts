import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForResourcePathParams extends SpeakeasyBase {
    resourceId: string;
}
export declare class ListTagsForResourceQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    pathParams: ListTagsForResourcePathParams;
    queryParams: ListTagsForResourceQueryParams;
    headers: ListTagsForResourceHeaders;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    accessPointNotFound?: any;
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    internalServerError?: any;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    statusCode: number;
}
