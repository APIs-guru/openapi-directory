package shared

type ChangeTypeEnum string

const (
	ChangeTypeEnumImmediate      ChangeTypeEnum = "immediate"
	ChangeTypeEnumRequiresReboot ChangeTypeEnum = "requires-reboot"
)
