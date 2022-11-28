import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { LifecycleStateEnum } from "./lifecyclestateenum";



// Instance
/** 
 * Describes an EC2 instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone: string;

  @SpeakeasyMetadata()
  healthStatus: string;

  @SpeakeasyMetadata()
  instanceId: string;

  @SpeakeasyMetadata()
  instanceType?: string;

  @SpeakeasyMetadata()
  launchConfigurationName?: string;

  @SpeakeasyMetadata()
  launchTemplate?: LaunchTemplateSpecification;

  @SpeakeasyMetadata()
  lifecycleState: LifecycleStateEnum;

  @SpeakeasyMetadata()
  protectedFromScaleIn: boolean;

  @SpeakeasyMetadata()
  weightedCapacity?: string;
}
