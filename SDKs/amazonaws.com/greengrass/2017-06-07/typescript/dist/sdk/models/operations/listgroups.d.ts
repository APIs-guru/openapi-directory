import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListGroupsRequest extends SpeakeasyBase {
    queryParams: ListGroupsQueryParams;
    headers: ListGroupsHeaders;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    contentType: string;
    listGroupsResponse?: shared.ListGroupsResponse;
    statusCode: number;
}
