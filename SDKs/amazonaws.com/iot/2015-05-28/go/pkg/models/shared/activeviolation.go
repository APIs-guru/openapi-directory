package shared

import (
	"time"
)

type ActiveViolation struct {
	Behavior                     *Behavior                     `json:"behavior,omitempty"`
	LastViolationTime            *time.Time                    `json:"lastViolationTime,omitempty"`
	LastViolationValue           *MetricValue                  `json:"lastViolationValue,omitempty"`
	SecurityProfileName          *string                       `json:"securityProfileName,omitempty"`
	ThingName                    *string                       `json:"thingName,omitempty"`
	ViolationEventAdditionalInfo *ViolationEventAdditionalInfo `json:"violationEventAdditionalInfo,omitempty"`
	ViolationID                  *string                       `json:"violationId,omitempty"`
	ViolationStartTime           *time.Time                    `json:"violationStartTime,omitempty"`
}
