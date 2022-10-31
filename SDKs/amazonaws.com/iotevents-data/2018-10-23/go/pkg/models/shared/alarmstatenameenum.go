package shared




type AlarmStateNameEnum string

const (
    AlarmStateNameEnumDisabled AlarmStateNameEnum = "DISABLED"
AlarmStateNameEnumNormal AlarmStateNameEnum = "NORMAL"
AlarmStateNameEnumActive AlarmStateNameEnum = "ACTIVE"
AlarmStateNameEnumAcknowledged AlarmStateNameEnum = "ACKNOWLEDGED"
AlarmStateNameEnumSnoozeDisabled AlarmStateNameEnum = "SNOOZE_DISABLED"
AlarmStateNameEnumLatched AlarmStateNameEnum = "LATCHED"
)


