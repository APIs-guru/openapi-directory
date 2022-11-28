import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLifecyclePolicyHeaders extends SpeakeasyBase {
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
export declare class CreateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
    actions?: shared.Action[];
    eventSource?: shared.EventSource;
    parameters?: shared.Parameters;
    policyType?: shared.PolicyTypeValuesEnum;
    resourceLocations?: shared.ResourceLocationValuesEnum[];
    resourceTypes?: shared.ResourceTypeValuesEnum[];
    schedules?: shared.Schedule[];
    targetTags?: shared.Tag[];
}
export declare enum CreateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateLifecyclePolicyRequestBody extends SpeakeasyBase {
    description: string;
    executionRoleArn: string;
    policyDetails: CreateLifecyclePolicyRequestBodyPolicyDetails;
    state: CreateLifecyclePolicyRequestBodyStateEnum;
    tags?: Map<string, string>;
}
export declare class CreateLifecyclePolicyRequest extends SpeakeasyBase {
    headers: CreateLifecyclePolicyHeaders;
    request: CreateLifecyclePolicyRequestBody;
}
export declare class CreateLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    createLifecyclePolicyResponse?: shared.CreateLifecyclePolicyResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
}
