import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";


// CreateMatchmakingConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateMatchmakingConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration?: MatchmakingConfiguration;
}
