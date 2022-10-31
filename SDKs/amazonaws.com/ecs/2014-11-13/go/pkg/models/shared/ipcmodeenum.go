package shared

type IpcModeEnum string

const (
	IpcModeEnumHost IpcModeEnum = "host"
	IpcModeEnumTask IpcModeEnum = "task"
	IpcModeEnumNone IpcModeEnum = "none"
)
