package shared

import (
	"time"
)

type PredictorBacktestExportJobSummary struct {
	CreationTime                   *time.Time       `json:"CreationTime,omitempty"`
	Destination                    *DataDestination `json:"Destination,omitempty"`
	LastModificationTime           *time.Time       `json:"LastModificationTime,omitempty"`
	Message                        *string          `json:"Message,omitempty"`
	PredictorBacktestExportJobArn  *string          `json:"PredictorBacktestExportJobArn,omitempty"`
	PredictorBacktestExportJobName *string          `json:"PredictorBacktestExportJobName,omitempty"`
	Status                         *string          `json:"Status,omitempty"`
}
