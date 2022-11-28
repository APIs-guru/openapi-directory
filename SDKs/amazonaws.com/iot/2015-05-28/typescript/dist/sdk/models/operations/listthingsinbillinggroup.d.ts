import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListThingsInBillingGroupPathParams extends SpeakeasyBase {
    billingGroupName: string;
}
export declare class ListThingsInBillingGroupQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListThingsInBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListThingsInBillingGroupRequest extends SpeakeasyBase {
    pathParams: ListThingsInBillingGroupPathParams;
    queryParams: ListThingsInBillingGroupQueryParams;
    headers: ListThingsInBillingGroupHeaders;
}
export declare class ListThingsInBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listThingsInBillingGroupResponse?: shared.ListThingsInBillingGroupResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
