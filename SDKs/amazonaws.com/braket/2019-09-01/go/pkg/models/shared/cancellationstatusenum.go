package shared

type CancellationStatusEnum string

const (
	CancellationStatusEnumCancelling CancellationStatusEnum = "CANCELLING"
	CancellationStatusEnumCancelled  CancellationStatusEnum = "CANCELLED"
)
