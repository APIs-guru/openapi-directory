import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicyRuleAction } from "./lifecyclepolicyruleaction";



// LifecyclePolicyPreviewResult
/** 
 * The result of the lifecycle policy preview.
**/
export class LifecyclePolicyPreviewResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: LifecyclePolicyRuleAction;

  @SpeakeasyMetadata({ data: "json, name=appliedRulePriority" })
  appliedRulePriority?: number;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=imagePushedAt" })
  imagePushedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=imageTags" })
  imageTags?: string[];
}
