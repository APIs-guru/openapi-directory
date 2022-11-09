import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecyclePolicyRuleAction } from "./lifecyclepolicyruleaction";


// LifecyclePolicyPreviewResult
/** 
 * The result of the lifecycle policy preview.
**/
export class LifecyclePolicyPreviewResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: LifecyclePolicyRuleAction;

  @Metadata({ data: "json, name=appliedRulePriority" })
  appliedRulePriority?: number;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=imagePushedAt" })
  imagePushedAt?: Date;

  @Metadata({ data: "json, name=imageTags" })
  imageTags?: string[];
}
