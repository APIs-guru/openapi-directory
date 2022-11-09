import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidRuleException
/** 
 * Occurs when any of the rule parameter keys or values are invalid.
**/
export class InvalidRuleException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
