package shared

import (
	"time"
)

type PutScheduledActionRequest struct {
	EndTime              *time.Time            `json:"EndTime,omitempty"`
	ResourceID           string                `json:"ResourceId"`
	ScalableDimension    ScalableDimensionEnum `json:"ScalableDimension"`
	ScalableTargetAction *ScalableTargetAction `json:"ScalableTargetAction,omitempty"`
	Schedule             *string               `json:"Schedule,omitempty"`
	ScheduledActionName  string                `json:"ScheduledActionName"`
	ServiceNamespace     ServiceNamespaceEnum  `json:"ServiceNamespace"`
	StartTime            *time.Time            `json:"StartTime,omitempty"`
	Timezone             *string               `json:"Timezone,omitempty"`
}
