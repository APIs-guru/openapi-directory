import { SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyRuleAction } from "./lifecyclepolicyruleaction";
/**
 * The result of the lifecycle policy preview.
**/
export declare class LifecyclePolicyPreviewResult extends SpeakeasyBase {
    action?: LifecyclePolicyRuleAction;
    appliedRulePriority?: number;
    imageDigest?: string;
    imagePushedAt?: Date;
    imageTags?: string[];
}
