import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";



// UpdateMatchmakingConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateMatchmakingConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: MatchmakingConfiguration;
}
