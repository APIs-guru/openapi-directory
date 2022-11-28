package shared

import (
	"time"
)

// RemediationExecutionStatus
// Provides details of the current status of the invoked remediation action for that resource.
type RemediationExecutionStatus struct {
	InvocationTime  *time.Time                     `json:"InvocationTime,omitempty"`
	LastUpdatedTime *time.Time                     `json:"LastUpdatedTime,omitempty"`
	ResourceKey     *ResourceKey                   `json:"ResourceKey,omitempty"`
	State           *RemediationExecutionStateEnum `json:"State,omitempty"`
	StepDetails     []RemediationExecutionStep     `json:"StepDetails,omitempty"`
}
