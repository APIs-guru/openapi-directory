import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetLaunchTemplateSpecification } from "./fleetlaunchtemplatespecification";
import { FleetLaunchTemplateOverrides } from "./fleetlaunchtemplateoverrides";



// LaunchTemplateAndOverridesResponse
/** 
 * Describes a launch template and overrides.
**/
export class LaunchTemplateAndOverridesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateSpecification?: FleetLaunchTemplateSpecification;

  @SpeakeasyMetadata()
  overrides?: FleetLaunchTemplateOverrides;
}
