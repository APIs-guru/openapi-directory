package shared

type SpotInstanceInterruptionBehaviorEnum string

const (
	SpotInstanceInterruptionBehaviorEnumHibernate SpotInstanceInterruptionBehaviorEnum = "hibernate"
	SpotInstanceInterruptionBehaviorEnumStop      SpotInstanceInterruptionBehaviorEnum = "stop"
	SpotInstanceInterruptionBehaviorEnumTerminate SpotInstanceInterruptionBehaviorEnum = "terminate"
)
