import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteMatchmakingConfigurationInput
/** 
 * Represents the input for a request operation.
**/
export class DeleteMatchmakingConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
