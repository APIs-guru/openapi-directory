package shared

import (
	"time"
)

type PutScheduledActionRequest struct {
	EndTime              *time.Time            `json:"EndTime"`
	ResourceID           string                `json:"ResourceId"`
	ScalableDimension    ScalableDimensionEnum `json:"ScalableDimension"`
	ScalableTargetAction *ScalableTargetAction `json:"ScalableTargetAction"`
	Schedule             *string               `json:"Schedule"`
	ScheduledActionName  string                `json:"ScheduledActionName"`
	ServiceNamespace     ServiceNamespaceEnum  `json:"ServiceNamespace"`
	StartTime            *time.Time            `json:"StartTime"`
	Timezone             *string               `json:"Timezone"`
}
