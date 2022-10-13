package shared

import (
	"time"
)

type ViolationEvent struct {
	Behavior                     *Behavior                     `json:"behavior"`
	MetricValue                  *MetricValue                  `json:"metricValue"`
	SecurityProfileName          *string                       `json:"securityProfileName"`
	ThingName                    *string                       `json:"thingName"`
	ViolationEventAdditionalInfo *ViolationEventAdditionalInfo `json:"violationEventAdditionalInfo"`
	ViolationEventTime           *time.Time                    `json:"violationEventTime"`
	ViolationEventType           *ViolationEventTypeEnum       `json:"violationEventType"`
	ViolationID                  *string                       `json:"violationId"`
}
