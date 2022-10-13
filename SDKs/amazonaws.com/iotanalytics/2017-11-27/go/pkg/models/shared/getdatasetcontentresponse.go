package shared

import (
	"time"
)

type GetDatasetContentResponse struct {
	Entries   []DatasetEntry        `json:"entries"`
	Status    *DatasetContentStatus `json:"status"`
	Timestamp *time.Time            `json:"timestamp"`
}
