package shared

import (
"time")

type RemediationExecutionStatus struct {
    InvocationTime *time.Time `json:"InvocationTime,omitempty"`
    LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
    ResourceKey *ResourceKey `json:"ResourceKey,omitempty"`
    State *RemediationExecutionStateEnum `json:"State,omitempty"`
    StepDetails []RemediationExecutionStep `json:"StepDetails,omitempty"`
    
}

