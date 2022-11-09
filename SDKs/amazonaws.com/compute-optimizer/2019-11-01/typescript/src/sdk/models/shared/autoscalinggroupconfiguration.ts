import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoScalingGroupConfiguration
/** 
 * Describes the configuration of an Auto Scaling group.
**/
export class AutoScalingGroupConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredCapacity" })
  desiredCapacity?: number;

  @Metadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=maxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=minSize" })
  minSize?: number;
}
