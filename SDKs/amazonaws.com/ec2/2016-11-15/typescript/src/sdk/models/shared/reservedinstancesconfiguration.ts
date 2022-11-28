import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { ScopeEnum } from "./scopeenum";



// ReservedInstancesConfiguration
/** 
 * Describes the configuration settings for the modified Reserved Instances.
**/
export class ReservedInstancesConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  instanceCount?: number;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  platform?: string;

  @SpeakeasyMetadata()
  scope?: ScopeEnum;
}
