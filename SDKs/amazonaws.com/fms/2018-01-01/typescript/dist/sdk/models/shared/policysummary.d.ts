import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityServiceTypeEnum } from "./securityservicetypeenum";
/**
 * Details of the Firewall Manager policy.
**/
export declare class PolicySummary extends SpeakeasyBase {
    deleteUnusedFmManagedResources?: boolean;
    policyArn?: string;
    policyId?: string;
    policyName?: string;
    remediationEnabled?: boolean;
    resourceType?: string;
    securityServiceType?: SecurityServiceTypeEnum;
}
