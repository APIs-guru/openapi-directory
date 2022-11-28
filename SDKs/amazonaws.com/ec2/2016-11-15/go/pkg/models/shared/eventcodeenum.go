package shared

type EventCodeEnum string

const (
	EventCodeEnumInstanceReboot     EventCodeEnum = "instance-reboot"
	EventCodeEnumSystemReboot       EventCodeEnum = "system-reboot"
	EventCodeEnumSystemMaintenance  EventCodeEnum = "system-maintenance"
	EventCodeEnumInstanceRetirement EventCodeEnum = "instance-retirement"
	EventCodeEnumInstanceStop       EventCodeEnum = "instance-stop"
)
