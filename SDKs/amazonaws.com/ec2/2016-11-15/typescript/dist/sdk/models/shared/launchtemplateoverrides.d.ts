import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 * Describes overrides for a launch template.
**/
export declare class LaunchTemplateOverrides extends SpeakeasyBase {
    availabilityZone?: string;
    instanceType?: InstanceTypeEnum;
    priority?: number;
    spotPrice?: string;
    subnetId?: string;
    weightedCapacity?: number;
}
