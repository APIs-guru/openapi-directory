import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { ScopeEnum } from "./scopeenum";
/**
 * Describes the configuration settings for the modified Reserved Instances.
**/
export declare class ReservedInstancesConfiguration extends SpeakeasyBase {
    availabilityZone?: string;
    instanceCount?: number;
    instanceType?: InstanceTypeEnum;
    platform?: string;
    scope?: ScopeEnum;
}
