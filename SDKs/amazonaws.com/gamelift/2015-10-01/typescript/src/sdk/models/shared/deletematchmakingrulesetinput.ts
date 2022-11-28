import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteMatchmakingRuleSetInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteMatchmakingRuleSetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
