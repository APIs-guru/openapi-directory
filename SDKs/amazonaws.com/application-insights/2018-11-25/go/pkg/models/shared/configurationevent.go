package shared

import (
	"time"
)

// ConfigurationEvent
//
//	The event information.
type ConfigurationEvent struct {
	EventDetail          *string                             `json:"EventDetail,omitempty"`
	EventResourceName    *string                             `json:"EventResourceName,omitempty"`
	EventResourceType    *ConfigurationEventResourceTypeEnum `json:"EventResourceType,omitempty"`
	EventStatus          *ConfigurationEventStatusEnum       `json:"EventStatus,omitempty"`
	EventTime            *time.Time                          `json:"EventTime,omitempty"`
	MonitoredResourceArn *string                             `json:"MonitoredResourceARN,omitempty"`
}
