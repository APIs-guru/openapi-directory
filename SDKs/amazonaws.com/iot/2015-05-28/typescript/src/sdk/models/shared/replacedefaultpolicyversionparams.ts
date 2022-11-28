import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTemplateNameEnum } from "./policytemplatenameenum";



// ReplaceDefaultPolicyVersionParams
/** 
 * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
**/
export class ReplaceDefaultPolicyVersionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: PolicyTemplateNameEnum;
}
