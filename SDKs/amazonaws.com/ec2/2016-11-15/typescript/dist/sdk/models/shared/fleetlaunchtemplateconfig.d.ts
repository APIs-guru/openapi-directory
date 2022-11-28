import { SpeakeasyBase } from "../../../internal/utils";
import { FleetLaunchTemplateSpecification } from "./fleetlaunchtemplatespecification";
import { FleetLaunchTemplateOverrides } from "./fleetlaunchtemplateoverrides";
/**
 * Describes a launch template and overrides.
**/
export declare class FleetLaunchTemplateConfig extends SpeakeasyBase {
    launchTemplateSpecification?: FleetLaunchTemplateSpecification;
    overrides?: FleetLaunchTemplateOverrides[];
}
