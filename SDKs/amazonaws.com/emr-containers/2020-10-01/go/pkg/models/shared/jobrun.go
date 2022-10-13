package shared

import (
	"time"
)

type JobRun struct {
	Arn                    *string                 `json:"arn"`
	ClientToken            *string                 `json:"clientToken"`
	ConfigurationOverrides *ConfigurationOverrides `json:"configurationOverrides"`
	CreatedAt              *time.Time              `json:"createdAt"`
	CreatedBy              *string                 `json:"createdBy"`
	ExecutionRoleArn       *string                 `json:"executionRoleArn"`
	FailureReason          *FailureReasonEnum      `json:"failureReason"`
	FinishedAt             *time.Time              `json:"finishedAt"`
	ID                     *string                 `json:"id"`
	JobDriver              *JobDriver              `json:"jobDriver"`
	Name                   *string                 `json:"name"`
	ReleaseLabel           *string                 `json:"releaseLabel"`
	State                  *JobRunStateEnum        `json:"state"`
	StateDetails           *string                 `json:"stateDetails"`
	Tags                   map[string]string       `json:"tags"`
	VirtualClusterID       *string                 `json:"virtualClusterId"`
}
