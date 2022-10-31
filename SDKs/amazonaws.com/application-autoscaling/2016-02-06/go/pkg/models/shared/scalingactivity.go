package shared

import (
	"time"
)

type ScalingActivity struct {
	ActivityID        string                        `json:"ActivityId"`
	Cause             string                        `json:"Cause"`
	Description       string                        `json:"Description"`
	Details           *string                       `json:"Details,omitempty"`
	EndTime           *time.Time                    `json:"EndTime,omitempty"`
	ResourceID        string                        `json:"ResourceId"`
	ScalableDimension ScalableDimensionEnum         `json:"ScalableDimension"`
	ServiceNamespace  ServiceNamespaceEnum          `json:"ServiceNamespace"`
	StartTime         time.Time                     `json:"StartTime"`
	StatusCode        ScalingActivityStatusCodeEnum `json:"StatusCode"`
	StatusMessage     *string                       `json:"StatusMessage,omitempty"`
}
