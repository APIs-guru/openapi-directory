import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { PlacementResponse } from "./placementresponse";
/**
 * Describes overrides for a launch template.
**/
export declare class FleetLaunchTemplateOverrides extends SpeakeasyBase {
    availabilityZone?: string;
    instanceType?: InstanceTypeEnum;
    maxPrice?: string;
    placement?: PlacementResponse;
    priority?: number;
    subnetId?: string;
    weightedCapacity?: number;
}
