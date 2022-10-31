package shared

type MessageTypeEnum string

const (
	MessageTypeEnumConfigurationItemChangeNotification          MessageTypeEnum = "ConfigurationItemChangeNotification"
	MessageTypeEnumConfigurationSnapshotDeliveryCompleted       MessageTypeEnum = "ConfigurationSnapshotDeliveryCompleted"
	MessageTypeEnumScheduledNotification                        MessageTypeEnum = "ScheduledNotification"
	MessageTypeEnumOversizedConfigurationItemChangeNotification MessageTypeEnum = "OversizedConfigurationItemChangeNotification"
)
