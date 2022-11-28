import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingGroupsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    namePrefixFilter?: string;
    nextToken?: string;
    parentGroup?: string;
    recursive?: boolean;
}
export declare class ListThingGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingGroupsRequest extends SpeakeasyBase {
    queryParams: ListThingGroupsQueryParams;
    headers: ListThingGroupsHeaders;
}
export declare class ListThingGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingGroupsResponse?: shared.ListThingGroupsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
