import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifecycleHook
/** 
 * Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances.
**/
export class LifecycleHook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupName?: string;

  @SpeakeasyMetadata()
  defaultResult?: string;

  @SpeakeasyMetadata()
  globalTimeout?: number;

  @SpeakeasyMetadata()
  heartbeatTimeout?: number;

  @SpeakeasyMetadata()
  lifecycleHookName?: string;

  @SpeakeasyMetadata()
  lifecycleTransition?: string;

  @SpeakeasyMetadata()
  notificationMetadata?: string;

  @SpeakeasyMetadata()
  notificationTargetArn?: string;

  @SpeakeasyMetadata()
  roleArn?: string;
}
