package shared

import (
	"time"
)

// PredictorBacktestExportJobSummary
// Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
type PredictorBacktestExportJobSummary struct {
	CreationTime                   *time.Time       `json:"CreationTime,omitempty"`
	Destination                    *DataDestination `json:"Destination,omitempty"`
	LastModificationTime           *time.Time       `json:"LastModificationTime,omitempty"`
	Message                        *string          `json:"Message,omitempty"`
	PredictorBacktestExportJobArn  *string          `json:"PredictorBacktestExportJobArn,omitempty"`
	PredictorBacktestExportJobName *string          `json:"PredictorBacktestExportJobName,omitempty"`
	Status                         *string          `json:"Status,omitempty"`
}
