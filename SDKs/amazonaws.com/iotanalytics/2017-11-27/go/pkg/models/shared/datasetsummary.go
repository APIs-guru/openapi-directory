package shared

import (
	"time"
)

// DatasetSummary
// A summary of information about a dataset.
type DatasetSummary struct {
	Actions        []DatasetActionSummary `json:"actions,omitempty"`
	CreationTime   *time.Time             `json:"creationTime,omitempty"`
	DatasetName    *string                `json:"datasetName,omitempty"`
	LastUpdateTime *time.Time             `json:"lastUpdateTime,omitempty"`
	Status         *DatasetStatusEnum     `json:"status,omitempty"`
	Triggers       []DatasetTrigger       `json:"triggers,omitempty"`
}
