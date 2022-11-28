import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidRuleException
/** 
 * Occurs when any of the rule parameter keys or values are invalid.
**/
export class InvalidRuleException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
