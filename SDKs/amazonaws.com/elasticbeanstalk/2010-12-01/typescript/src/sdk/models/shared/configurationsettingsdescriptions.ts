import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSettingsDescription } from "./configurationsettingsdescription";



// ConfigurationSettingsDescriptions
/** 
 * The results from a request to change the configuration settings of an environment.
**/
export class ConfigurationSettingsDescriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigurationSettingsDescription })
  configurationSettings?: ConfigurationSettingsDescription[];
}
