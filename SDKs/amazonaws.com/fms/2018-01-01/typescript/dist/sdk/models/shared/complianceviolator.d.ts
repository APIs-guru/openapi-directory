import { SpeakeasyBase } from "../../../internal/utils";
import { ViolationReasonEnum } from "./violationreasonenum";
/**
 * Details of the resource that is not protected by the policy.
**/
export declare class ComplianceViolator extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: string;
    violationReason?: ViolationReasonEnum;
}
