import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingConfiguration } from "./matchmakingconfiguration";



// CreateMatchmakingConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateMatchmakingConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: MatchmakingConfiguration;
}
