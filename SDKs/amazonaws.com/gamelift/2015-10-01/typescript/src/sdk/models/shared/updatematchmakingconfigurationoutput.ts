import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";


// UpdateMatchmakingConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateMatchmakingConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration?: MatchmakingConfiguration;
}
