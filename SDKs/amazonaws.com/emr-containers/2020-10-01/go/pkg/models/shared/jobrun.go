package shared

import (
	"time"
)

type JobRun struct {
	Arn                    *string                 `json:"arn,omitempty"`
	ClientToken            *string                 `json:"clientToken,omitempty"`
	ConfigurationOverrides *ConfigurationOverrides `json:"configurationOverrides,omitempty"`
	CreatedAt              *time.Time              `json:"createdAt,omitempty"`
	CreatedBy              *string                 `json:"createdBy,omitempty"`
	ExecutionRoleArn       *string                 `json:"executionRoleArn,omitempty"`
	FailureReason          *FailureReasonEnum      `json:"failureReason,omitempty"`
	FinishedAt             *time.Time              `json:"finishedAt,omitempty"`
	ID                     *string                 `json:"id,omitempty"`
	JobDriver              *JobDriver              `json:"jobDriver,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	ReleaseLabel           *string                 `json:"releaseLabel,omitempty"`
	State                  *JobRunStateEnum        `json:"state,omitempty"`
	StateDetails           *string                 `json:"stateDetails,omitempty"`
	Tags                   map[string]string       `json:"tags,omitempty"`
	VirtualClusterID       *string                 `json:"virtualClusterId,omitempty"`
}
