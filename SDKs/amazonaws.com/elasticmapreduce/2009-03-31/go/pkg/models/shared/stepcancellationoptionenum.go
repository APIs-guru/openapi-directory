package shared

type StepCancellationOptionEnum string

const (
	StepCancellationOptionEnumSendInterrupt    StepCancellationOptionEnum = "SEND_INTERRUPT"
	StepCancellationOptionEnumTerminateProcess StepCancellationOptionEnum = "TERMINATE_PROCESS"
)
