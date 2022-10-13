package shared

import (
	"time"
)

type RemediationExecutionStatus struct {
	InvocationTime  *time.Time                     `json:"InvocationTime"`
	LastUpdatedTime *time.Time                     `json:"LastUpdatedTime"`
	ResourceKey     *ResourceKey                   `json:"ResourceKey"`
	State           *RemediationExecutionStateEnum `json:"State"`
	StepDetails     []RemediationExecutionStep     `json:"StepDetails"`
}
