package shared

import (
	"time"
)

type Experiment struct {
	Actions              map[string]ExperimentAction `json:"actions"`
	CreationTime         *time.Time                  `json:"creationTime"`
	EndTime              *time.Time                  `json:"endTime"`
	ExperimentTemplateID *string                     `json:"experimentTemplateId"`
	ID                   *string                     `json:"id"`
	RoleArn              *string                     `json:"roleArn"`
	StartTime            *time.Time                  `json:"startTime"`
	State                *ExperimentState            `json:"state"`
	StopConditions       []ExperimentStopCondition   `json:"stopConditions"`
	Tags                 map[string]string           `json:"tags"`
	Targets              map[string]ExperimentTarget `json:"targets"`
}
