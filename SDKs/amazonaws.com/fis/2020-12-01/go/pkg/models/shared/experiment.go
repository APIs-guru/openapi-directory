package shared

import (
	"time"
)

type Experiment struct {
	Actions              map[string]ExperimentAction `json:"actions,omitempty"`
	CreationTime         *time.Time                  `json:"creationTime,omitempty"`
	EndTime              *time.Time                  `json:"endTime,omitempty"`
	ExperimentTemplateID *string                     `json:"experimentTemplateId,omitempty"`
	ID                   *string                     `json:"id,omitempty"`
	RoleArn              *string                     `json:"roleArn,omitempty"`
	StartTime            *time.Time                  `json:"startTime,omitempty"`
	State                *ExperimentState            `json:"state,omitempty"`
	StopConditions       []ExperimentStopCondition   `json:"stopConditions,omitempty"`
	Tags                 map[string]string           `json:"tags,omitempty"`
	Targets              map[string]ExperimentTarget `json:"targets,omitempty"`
}
