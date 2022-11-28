import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyDetails } from "./policydetails";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";
/**
 * Detailed information about a lifecycle policy.
**/
export declare class LifecyclePolicy extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    executionRoleArn?: string;
    policyArn?: string;
    policyDetails?: PolicyDetails;
    policyId?: string;
    state?: GettablePolicyStateValuesEnum;
    statusMessage?: string;
    tags?: Map<string, string>;
}
