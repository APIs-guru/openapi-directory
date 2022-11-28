package shared

type InstanceInterruptionBehaviorEnum string

const (
	InstanceInterruptionBehaviorEnumHibernate InstanceInterruptionBehaviorEnum = "hibernate"
	InstanceInterruptionBehaviorEnumStop      InstanceInterruptionBehaviorEnum = "stop"
	InstanceInterruptionBehaviorEnumTerminate InstanceInterruptionBehaviorEnum = "terminate"
)
