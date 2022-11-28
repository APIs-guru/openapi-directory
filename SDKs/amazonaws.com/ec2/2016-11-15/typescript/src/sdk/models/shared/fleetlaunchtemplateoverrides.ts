import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { PlacementResponse } from "./placementresponse";



// FleetLaunchTemplateOverrides
/** 
 * Describes overrides for a launch template.
**/
export class FleetLaunchTemplateOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  maxPrice?: string;

  @SpeakeasyMetadata()
  placement?: PlacementResponse;

  @SpeakeasyMetadata()
  priority?: number;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata()
  weightedCapacity?: number;
}
