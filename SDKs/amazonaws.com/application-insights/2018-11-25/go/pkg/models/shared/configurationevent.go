package shared

import (
	"time"
)

type ConfigurationEvent struct {
	EventDetail          *string                             `json:"EventDetail"`
	EventResourceName    *string                             `json:"EventResourceName"`
	EventResourceType    *ConfigurationEventResourceTypeEnum `json:"EventResourceType"`
	EventStatus          *ConfigurationEventStatusEnum       `json:"EventStatus"`
	EventTime            *time.Time                          `json:"EventTime"`
	MonitoredResourceArn *string                             `json:"MonitoredResourceARN"`
}
