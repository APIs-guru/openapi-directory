import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteMatchmakingConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteMatchmakingConfigurationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
