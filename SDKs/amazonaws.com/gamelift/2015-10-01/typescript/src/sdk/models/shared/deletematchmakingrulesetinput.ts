import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteMatchmakingRuleSetInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteMatchmakingRuleSetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
