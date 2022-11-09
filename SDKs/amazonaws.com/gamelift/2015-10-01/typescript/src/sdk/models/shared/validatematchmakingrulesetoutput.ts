import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidateMatchmakingRuleSetOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ValidateMatchmakingRuleSetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Valid" })
  valid?: boolean;
}
