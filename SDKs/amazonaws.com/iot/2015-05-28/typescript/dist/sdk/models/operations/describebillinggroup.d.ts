import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBillingGroupPathParams extends SpeakeasyBase {
    billingGroupName: string;
}
export declare class DescribeBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeBillingGroupRequest extends SpeakeasyBase {
    pathParams: DescribeBillingGroupPathParams;
    headers: DescribeBillingGroupHeaders;
}
export declare class DescribeBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeBillingGroupResponse?: shared.DescribeBillingGroupResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
