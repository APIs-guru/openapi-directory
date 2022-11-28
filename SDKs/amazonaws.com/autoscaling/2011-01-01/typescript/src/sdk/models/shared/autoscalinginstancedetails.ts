import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";



// AutoScalingInstanceDetails
/** 
 * Describes an EC2 instance associated with an Auto Scaling group.
**/
export class AutoScalingInstanceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupName: string;

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
  lifecycleState: string;

  @SpeakeasyMetadata()
  protectedFromScaleIn: boolean;

  @SpeakeasyMetadata()
  weightedCapacity?: string;
}
