import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MappingRule } from "./mappingrule";


// RulesConfigurationType
/** 
 * A container for rules.
**/
export class RulesConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.MappingRule })
  rules: MappingRule[];
}
