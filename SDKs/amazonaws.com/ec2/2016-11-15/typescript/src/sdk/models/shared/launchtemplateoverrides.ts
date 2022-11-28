import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";



// LaunchTemplateOverrides
/** 
 * Describes overrides for a launch template.
**/
export class LaunchTemplateOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  priority?: number;

  @SpeakeasyMetadata()
  spotPrice?: string;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata()
  weightedCapacity?: number;
}
