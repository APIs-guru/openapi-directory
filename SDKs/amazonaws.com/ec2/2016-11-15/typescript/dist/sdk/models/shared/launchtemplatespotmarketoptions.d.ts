import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceInterruptionBehaviorEnum } from "./instanceinterruptionbehaviorenum";
import { SpotInstanceTypeEnum } from "./spotinstancetypeenum";
/**
 * The options for Spot Instances.
**/
export declare class LaunchTemplateSpotMarketOptions extends SpeakeasyBase {
    blockDurationMinutes?: number;
    instanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;
    maxPrice?: string;
    spotInstanceType?: SpotInstanceTypeEnum;
    validUntil?: Date;
}
