package shared

import (
	"time"
)

type ActiveViolation struct {
	Behavior                     *Behavior                     `json:"behavior"`
	LastViolationTime            *time.Time                    `json:"lastViolationTime"`
	LastViolationValue           *MetricValue                  `json:"lastViolationValue"`
	SecurityProfileName          *string                       `json:"securityProfileName"`
	ThingName                    *string                       `json:"thingName"`
	ViolationEventAdditionalInfo *ViolationEventAdditionalInfo `json:"violationEventAdditionalInfo"`
	ViolationID                  *string                       `json:"violationId"`
	ViolationStartTime           *time.Time                    `json:"violationStartTime"`
}
