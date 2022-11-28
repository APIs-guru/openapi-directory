import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances.
**/
export declare class LifecycleHook extends SpeakeasyBase {
    autoScalingGroupName?: string;
    defaultResult?: string;
    globalTimeout?: number;
    heartbeatTimeout?: number;
    lifecycleHookName?: string;
    lifecycleTransition?: string;
    notificationMetadata?: string;
    notificationTargetArn?: string;
    roleArn?: string;
}
