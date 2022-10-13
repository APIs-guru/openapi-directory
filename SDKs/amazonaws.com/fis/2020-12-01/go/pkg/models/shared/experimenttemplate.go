package shared

import (
	"time"
)

type ExperimentTemplate struct {
	Actions        map[string]ExperimentTemplateAction `json:"actions"`
	CreationTime   *time.Time                          `json:"creationTime"`
	Description    *string                             `json:"description"`
	ID             *string                             `json:"id"`
	LastUpdateTime *time.Time                          `json:"lastUpdateTime"`
	RoleArn        *string                             `json:"roleArn"`
	StopConditions []ExperimentTemplateStopCondition   `json:"stopConditions"`
	Tags           map[string]string                   `json:"tags"`
	Targets        map[string]ExperimentTemplateTarget `json:"targets"`
}
