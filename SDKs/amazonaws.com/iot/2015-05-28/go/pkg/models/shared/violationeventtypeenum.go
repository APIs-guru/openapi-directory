package shared

type ViolationEventTypeEnum string

const (
	ViolationEventTypeEnumInAlarm          ViolationEventTypeEnum = "in-alarm"
	ViolationEventTypeEnumAlarmCleared     ViolationEventTypeEnum = "alarm-cleared"
	ViolationEventTypeEnumAlarmInvalidated ViolationEventTypeEnum = "alarm-invalidated"
)
