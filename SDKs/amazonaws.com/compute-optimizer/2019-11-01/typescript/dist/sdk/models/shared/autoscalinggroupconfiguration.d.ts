import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the configuration of an Auto Scaling group.
**/
export declare class AutoScalingGroupConfiguration extends SpeakeasyBase {
    desiredCapacity?: number;
    instanceType?: string;
    maxSize?: number;
    minSize?: number;
}
