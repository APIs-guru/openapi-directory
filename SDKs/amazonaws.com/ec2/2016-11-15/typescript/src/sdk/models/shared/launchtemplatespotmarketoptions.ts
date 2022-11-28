import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInterruptionBehaviorEnum } from "./instanceinterruptionbehaviorenum";
import { SpotInstanceTypeEnum } from "./spotinstancetypeenum";



// LaunchTemplateSpotMarketOptions
/** 
 * The options for Spot Instances.
**/
export class LaunchTemplateSpotMarketOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockDurationMinutes?: number;

  @SpeakeasyMetadata()
  instanceInterruptionBehavior?: InstanceInterruptionBehaviorEnum;

  @SpeakeasyMetadata()
  maxPrice?: string;

  @SpeakeasyMetadata()
  spotInstanceType?: SpotInstanceTypeEnum;

  @SpeakeasyMetadata()
  validUntil?: Date;
}
