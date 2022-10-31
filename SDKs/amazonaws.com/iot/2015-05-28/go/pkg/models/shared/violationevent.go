package shared

import (
"time")

type ViolationEvent struct {
    Behavior *Behavior `json:"behavior,omitempty"`
    MetricValue *MetricValue `json:"metricValue,omitempty"`
    SecurityProfileName *string `json:"securityProfileName,omitempty"`
    ThingName *string `json:"thingName,omitempty"`
    ViolationEventAdditionalInfo *ViolationEventAdditionalInfo `json:"violationEventAdditionalInfo,omitempty"`
    ViolationEventTime *time.Time `json:"violationEventTime,omitempty"`
    ViolationEventType *ViolationEventTypeEnum `json:"violationEventType,omitempty"`
    ViolationID *string `json:"violationId,omitempty"`
    
}

