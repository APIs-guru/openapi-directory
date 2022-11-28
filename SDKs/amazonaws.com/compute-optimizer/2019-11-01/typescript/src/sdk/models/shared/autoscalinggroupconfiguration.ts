import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoScalingGroupConfiguration
/** 
 * Describes the configuration of an Auto Scaling group.
**/
export class AutoScalingGroupConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredCapacity" })
  desiredCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=minSize" })
  minSize?: number;
}
