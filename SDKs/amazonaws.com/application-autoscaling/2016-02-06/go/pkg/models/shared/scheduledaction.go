package shared

import (
"time")

type ScheduledAction struct {
    CreationTime time.Time `json:"CreationTime"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    ResourceID string `json:"ResourceId"`
    ScalableDimension *ScalableDimensionEnum `json:"ScalableDimension,omitempty"`
    ScalableTargetAction *ScalableTargetAction `json:"ScalableTargetAction,omitempty"`
    Schedule string `json:"Schedule"`
    ScheduledActionArn string `json:"ScheduledActionARN"`
    ScheduledActionName string `json:"ScheduledActionName"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Timezone *string `json:"Timezone,omitempty"`
    
}

