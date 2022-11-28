import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageActionTypeEnum } from "./imageactiontypeenum";



// LifecyclePolicyRuleAction
/** 
 * The type of action to be taken.
**/
export class LifecyclePolicyRuleAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImageActionTypeEnum;
}
