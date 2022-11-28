import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { ResourceViolation } from "./resourceviolation";
/**
 * Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
**/
export declare class ViolationDetail extends SpeakeasyBase {
    memberAccount: string;
    policyId: string;
    resourceDescription?: string;
    resourceId: string;
    resourceTags?: Tag[];
    resourceType: string;
    resourceViolations: ResourceViolation[];
}
