package shared

import (
	"time"
)

type GetDatasetContentResponse struct {
	Entries   []DatasetEntry        `json:"entries,omitempty"`
	Status    *DatasetContentStatus `json:"status,omitempty"`
	Timestamp *time.Time            `json:"timestamp,omitempty"`
}
