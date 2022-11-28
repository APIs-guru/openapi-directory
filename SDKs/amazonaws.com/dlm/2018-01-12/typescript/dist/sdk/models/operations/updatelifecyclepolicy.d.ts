import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLifecyclePolicyPathParams extends SpeakeasyBase {
    policyId: string;
}
export declare class UpdateLifecyclePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the configuration of a lifecycle policy.
**/
export declare class UpdateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
    actions?: shared.Action[];
    eventSource?: shared.EventSource;
    parameters?: shared.Parameters;
    policyType?: shared.PolicyTypeValuesEnum;
    resourceLocations?: shared.ResourceLocationValuesEnum[];
    resourceTypes?: shared.ResourceTypeValuesEnum[];
    schedules?: shared.Schedule[];
    targetTags?: shared.Tag[];
}
export declare enum UpdateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateLifecyclePolicyRequestBody extends SpeakeasyBase {
    description?: string;
    executionRoleArn?: string;
    policyDetails?: UpdateLifecyclePolicyRequestBodyPolicyDetails;
    state?: UpdateLifecyclePolicyRequestBodyStateEnum;
}
export declare class UpdateLifecyclePolicyRequest extends SpeakeasyBase {
    pathParams: UpdateLifecyclePolicyPathParams;
    headers: UpdateLifecyclePolicyHeaders;
    request: UpdateLifecyclePolicyRequestBody;
}
export declare class UpdateLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateLifecyclePolicyResponse?: Map<string, any>;
}
