import { SpeakeasyBase } from "../../../internal/utils";
import { FleetLaunchTemplateSpecification } from "./fleetlaunchtemplatespecification";
import { LaunchTemplateOverrides } from "./launchtemplateoverrides";
/**
 * Describes a launch template and overrides.
**/
export declare class LaunchTemplateConfig extends SpeakeasyBase {
    launchTemplateSpecification?: FleetLaunchTemplateSpecification;
    overrides?: LaunchTemplateOverrides[];
}
