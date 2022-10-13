package shared

import (
	"time"
)

type DatasetSummary struct {
	Actions        []DatasetActionSummary `json:"actions"`
	CreationTime   *time.Time             `json:"creationTime"`
	DatasetName    *string                `json:"datasetName"`
	LastUpdateTime *time.Time             `json:"lastUpdateTime"`
	Status         *DatasetStatusEnum     `json:"status"`
	Triggers       []DatasetTrigger       `json:"triggers"`
}
