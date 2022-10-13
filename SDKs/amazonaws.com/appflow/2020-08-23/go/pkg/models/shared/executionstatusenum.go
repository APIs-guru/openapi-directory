package shared

type ExecutionStatusEnum string

const (
	ExecutionStatusEnumInProgress ExecutionStatusEnum = "InProgress"
	ExecutionStatusEnumSuccessful ExecutionStatusEnum = "Successful"
	ExecutionStatusEnumError      ExecutionStatusEnum = "Error"
)
