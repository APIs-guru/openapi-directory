package shared

type LogDeliveryConfigurationStatusEnum string

const (
	LogDeliveryConfigurationStatusEnumActive    LogDeliveryConfigurationStatusEnum = "active"
	LogDeliveryConfigurationStatusEnumEnabling  LogDeliveryConfigurationStatusEnum = "enabling"
	LogDeliveryConfigurationStatusEnumModifying LogDeliveryConfigurationStatusEnum = "modifying"
	LogDeliveryConfigurationStatusEnumDisabling LogDeliveryConfigurationStatusEnum = "disabling"
	LogDeliveryConfigurationStatusEnumError     LogDeliveryConfigurationStatusEnum = "error"
)
