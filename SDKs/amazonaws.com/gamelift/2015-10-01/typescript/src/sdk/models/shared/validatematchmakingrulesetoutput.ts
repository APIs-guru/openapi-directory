import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidateMatchmakingRuleSetOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class ValidateMatchmakingRuleSetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Valid" })
  valid?: boolean;
}
