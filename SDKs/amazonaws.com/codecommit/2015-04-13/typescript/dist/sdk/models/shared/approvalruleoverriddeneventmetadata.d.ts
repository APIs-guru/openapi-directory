import { SpeakeasyBase } from "../../../internal/utils";
import { OverrideStatusEnum } from "./overridestatusenum";
/**
 * Returns information about an override event for approval rules for a pull request.
**/
export declare class ApprovalRuleOverriddenEventMetadata extends SpeakeasyBase {
    overrideStatus?: OverrideStatusEnum;
    revisionId?: string;
}
