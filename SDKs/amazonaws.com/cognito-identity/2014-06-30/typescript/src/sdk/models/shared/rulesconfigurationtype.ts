import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MappingRule } from "./mappingrule";



// RulesConfigurationType
/** 
 * A container for rules.
**/
export class RulesConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: MappingRule })
  rules: MappingRule[];
}
