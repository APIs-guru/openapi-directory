import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyOwnerEntityTypeEnum } from "./policyownerentitytypeenum";
import { PolicyTypeEnum } from "./policytypeenum";
/**
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
**/
export declare class PolicyGrantingServiceAccess extends SpeakeasyBase {
    entityName?: string;
    entityType?: PolicyOwnerEntityTypeEnum;
    policyArn?: string;
    policyName: string;
    policyType: PolicyTypeEnum;
}
