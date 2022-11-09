import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageActionTypeEnum } from "./imageactiontypeenum";


// LifecyclePolicyRuleAction
/** 
 * The type of action to be taken.
**/
export class LifecyclePolicyRuleAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: ImageActionTypeEnum;
}
