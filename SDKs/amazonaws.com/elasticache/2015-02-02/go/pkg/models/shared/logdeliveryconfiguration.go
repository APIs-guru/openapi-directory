package shared

// LogDeliveryConfiguration
// Returns the destination, format and type of the logs.
type LogDeliveryConfiguration struct {
	DestinationDetails *DestinationDetails
	DestinationType    *DestinationTypeEnum
	LogFormat          *LogFormatEnum
	LogType            *LogTypeEnum
	Message            *string
	Status             *LogDeliveryConfigurationStatusEnum
}
