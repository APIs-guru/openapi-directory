import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";
/**
 * Summary information about a lifecycle policy.
**/
export declare class LifecyclePolicySummary extends SpeakeasyBase {
    description?: string;
    policyId?: string;
    policyType?: PolicyTypeValuesEnum;
    state?: GettablePolicyStateValuesEnum;
    tags?: Map<string, string>;
}
