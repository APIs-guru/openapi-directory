import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetLaunchTemplateSpecification } from "./fleetlaunchtemplatespecification";
import { FleetLaunchTemplateOverrides } from "./fleetlaunchtemplateoverrides";



// FleetLaunchTemplateConfig
/** 
 * Describes a launch template and overrides.
**/
export class FleetLaunchTemplateConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateSpecification?: FleetLaunchTemplateSpecification;

  @SpeakeasyMetadata({ elemType: FleetLaunchTemplateOverrides })
  overrides?: FleetLaunchTemplateOverrides[];
}
