import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetLaunchTemplateSpecification } from "./fleetlaunchtemplatespecification";
import { LaunchTemplateOverrides } from "./launchtemplateoverrides";



// LaunchTemplateConfig
/** 
 * Describes a launch template and overrides.
**/
export class LaunchTemplateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateSpecification?: FleetLaunchTemplateSpecification;

  @SpeakeasyMetadata({ elemType: LaunchTemplateOverrides })
  overrides?: LaunchTemplateOverrides[];
}
