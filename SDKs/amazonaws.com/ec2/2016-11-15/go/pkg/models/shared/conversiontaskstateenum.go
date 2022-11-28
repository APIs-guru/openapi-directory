package shared

type ConversionTaskStateEnum string

const (
	ConversionTaskStateEnumActive     ConversionTaskStateEnum = "active"
	ConversionTaskStateEnumCancelling ConversionTaskStateEnum = "cancelling"
	ConversionTaskStateEnumCancelled  ConversionTaskStateEnum = "cancelled"
	ConversionTaskStateEnumCompleted  ConversionTaskStateEnum = "completed"
)
