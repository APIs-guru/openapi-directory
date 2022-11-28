import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchConfiguration } from "./launchconfiguration";



export class LaunchConfigurationsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LaunchConfiguration })
  launchConfigurations: LaunchConfiguration[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
