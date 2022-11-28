import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceAttributeEnum } from "./deviceattributeenum";
import { RuleOperatorEnum } from "./ruleoperatorenum";



// Rule
/** 
 * Represents a condition for a device pool.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: DeviceAttributeEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: RuleOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
