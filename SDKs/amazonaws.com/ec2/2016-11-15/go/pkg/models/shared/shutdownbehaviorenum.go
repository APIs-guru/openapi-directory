package shared

type ShutdownBehaviorEnum string

const (
	ShutdownBehaviorEnumStop      ShutdownBehaviorEnum = "stop"
	ShutdownBehaviorEnumTerminate ShutdownBehaviorEnum = "terminate"
)
