package shared

import (
	"time"
)

// ExperimentTemplate
// Describes an experiment template.
type ExperimentTemplate struct {
	Actions        map[string]ExperimentTemplateAction `json:"actions,omitempty"`
	CreationTime   *time.Time                          `json:"creationTime,omitempty"`
	Description    *string                             `json:"description,omitempty"`
	ID             *string                             `json:"id,omitempty"`
	LastUpdateTime *time.Time                          `json:"lastUpdateTime,omitempty"`
	RoleArn        *string                             `json:"roleArn,omitempty"`
	StopConditions []ExperimentTemplateStopCondition   `json:"stopConditions,omitempty"`
	Tags           map[string]string                   `json:"tags,omitempty"`
	Targets        map[string]ExperimentTemplateTarget `json:"targets,omitempty"`
}
