import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LaunchTemplateAndOverridesResponse } from "./launchtemplateandoverridesresponse";
import { InstanceLifecycleEnum } from "./instancelifecycleenum";
import { PlatformValuesEnum } from "./platformvaluesenum";



// DescribeFleetsInstances
/** 
 * Describes the instances that were launched by the fleet.
**/
export class DescribeFleetsInstances extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceIds?: string[];

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  @SpeakeasyMetadata()
  lifecycle?: InstanceLifecycleEnum;

  @SpeakeasyMetadata()
  platform?: PlatformValuesEnum;
}
