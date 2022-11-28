import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBillingGroupPathParams extends SpeakeasyBase {
    billingGroupName: string;
}
export declare class UpdateBillingGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The properties of a billing group.
**/
export declare class UpdateBillingGroupRequestBodyBillingGroupProperties extends SpeakeasyBase {
    billingGroupDescription?: string;
}
export declare class UpdateBillingGroupRequestBody extends SpeakeasyBase {
    billingGroupProperties: UpdateBillingGroupRequestBodyBillingGroupProperties;
    expectedVersion?: number;
}
export declare class UpdateBillingGroupRequest extends SpeakeasyBase {
    pathParams: UpdateBillingGroupPathParams;
    headers: UpdateBillingGroupHeaders;
    request: UpdateBillingGroupRequestBody;
}
export declare class UpdateBillingGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateBillingGroupResponse?: shared.UpdateBillingGroupResponse;
    versionConflictException?: any;
}
