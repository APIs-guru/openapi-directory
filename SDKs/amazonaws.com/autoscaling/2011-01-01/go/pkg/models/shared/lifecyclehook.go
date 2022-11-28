package shared

// LifecycleHook
// Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances.
type LifecycleHook struct {
	AutoScalingGroupName  *string
	DefaultResult         *string
	GlobalTimeout         *int64
	HeartbeatTimeout      *int64
	LifecycleHookName     *string
	LifecycleTransition   *string
	NotificationMetadata  *string
	NotificationTargetArn *string
	RoleArn               *string
}
