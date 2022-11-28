package shared

// PendingLogDeliveryConfiguration
// The log delivery configurations being modified
type PendingLogDeliveryConfiguration struct {
	DestinationDetails *DestinationDetails
	DestinationType    *DestinationTypeEnum
	LogFormat          *LogFormatEnum
	LogType            *LogTypeEnum
}
