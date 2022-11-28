import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProfilingGroupsQueryParams extends SpeakeasyBase {
    includeDescription?: boolean;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListProfilingGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListProfilingGroupsRequest extends SpeakeasyBase {
    queryParams: ListProfilingGroupsQueryParams;
    headers: ListProfilingGroupsHeaders;
}
export declare class ListProfilingGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listProfilingGroupsResponse?: shared.ListProfilingGroupsResponse;
    statusCode: number;
    throttlingException?: any;
}
