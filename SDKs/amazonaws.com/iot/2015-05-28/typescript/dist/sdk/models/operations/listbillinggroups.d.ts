import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBillingGroupsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    namePrefixFilter?: string;
    nextToken?: string;
}
export declare class ListBillingGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBillingGroupsRequest extends SpeakeasyBase {
    queryParams: ListBillingGroupsQueryParams;
    headers: ListBillingGroupsHeaders;
}
export declare class ListBillingGroupsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listBillingGroupsResponse?: shared.ListBillingGroupsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
