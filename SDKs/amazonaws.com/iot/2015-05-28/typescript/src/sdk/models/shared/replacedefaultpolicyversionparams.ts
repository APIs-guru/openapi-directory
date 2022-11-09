import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTemplateNameEnum } from "./policytemplatenameenum";


// ReplaceDefaultPolicyVersionParams
/** 
 * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
**/
export class ReplaceDefaultPolicyVersionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=templateName" })
  templateName: PolicyTemplateNameEnum;
}
