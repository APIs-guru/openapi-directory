package shared

import (
	"time"
)

type PredictorBacktestExportJobSummary struct {
	CreationTime                   *time.Time       `json:"CreationTime"`
	Destination                    *DataDestination `json:"Destination"`
	LastModificationTime           *time.Time       `json:"LastModificationTime"`
	Message                        *string          `json:"Message"`
	PredictorBacktestExportJobArn  *string          `json:"PredictorBacktestExportJobArn"`
	PredictorBacktestExportJobName *string          `json:"PredictorBacktestExportJobName"`
	Status                         *string          `json:"Status"`
}
