package shared

type CustomerActionNameEnum string

const (
	CustomerActionNameEnumSnooze      CustomerActionNameEnum = "SNOOZE"
	CustomerActionNameEnumEnable      CustomerActionNameEnum = "ENABLE"
	CustomerActionNameEnumDisable     CustomerActionNameEnum = "DISABLE"
	CustomerActionNameEnumAcknowledge CustomerActionNameEnum = "ACKNOWLEDGE"
	CustomerActionNameEnumReset       CustomerActionNameEnum = "RESET"
)
