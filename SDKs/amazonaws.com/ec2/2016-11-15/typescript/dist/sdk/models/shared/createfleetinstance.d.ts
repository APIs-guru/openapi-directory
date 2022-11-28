import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LaunchTemplateAndOverridesResponse } from "./launchtemplateandoverridesresponse";
import { InstanceLifecycleEnum } from "./instancelifecycleenum";
import { PlatformValuesEnum } from "./platformvaluesenum";
/**
 * Describes the instances that were launched by the fleet.
**/
export declare class CreateFleetInstance extends SpeakeasyBase {
    instanceIds?: string[];
    instanceType?: InstanceTypeEnum;
    launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
    lifecycle?: InstanceLifecycleEnum;
    platform?: PlatformValuesEnum;
}
