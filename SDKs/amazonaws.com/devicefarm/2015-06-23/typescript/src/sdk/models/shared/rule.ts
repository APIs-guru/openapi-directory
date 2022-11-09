import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceAttributeEnum } from "./deviceattributeenum";
import { RuleOperatorEnum } from "./ruleoperatorenum";


// Rule
/** 
 * Represents a condition for a device pool.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: DeviceAttributeEnum;

  @Metadata({ data: "json, name=operator" })
  operator?: RuleOperatorEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
