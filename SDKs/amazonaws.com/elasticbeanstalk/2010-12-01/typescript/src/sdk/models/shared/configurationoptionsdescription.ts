import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionDescription } from "./configurationoptiondescription";



// ConfigurationOptionsDescription
/** 
 * Describes the settings for a specified configuration set.
**/
export class ConfigurationOptionsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigurationOptionDescription })
  options?: ConfigurationOptionDescription[];

  @SpeakeasyMetadata()
  platformArn?: string;

  @SpeakeasyMetadata()
  solutionStackName?: string;
}
