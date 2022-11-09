import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGroupVersionsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ListGroupVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListGroupVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGroupVersionsRequest extends SpeakeasyBase {
    pathParams: ListGroupVersionsPathParams;
    queryParams: ListGroupVersionsQueryParams;
    headers: ListGroupVersionsHeaders;
}
export declare class ListGroupVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listGroupVersionsResponse?: shared.ListGroupVersionsResponse;
    statusCode: number;
}
