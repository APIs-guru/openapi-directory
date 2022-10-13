package shared

import (
	"time"
)

type ExperimentSummary struct {
	CreationTime         *time.Time        `json:"creationTime"`
	ExperimentTemplateID *string           `json:"experimentTemplateId"`
	ID                   *string           `json:"id"`
	State                *ExperimentState  `json:"state"`
	Tags                 map[string]string `json:"tags"`
}
