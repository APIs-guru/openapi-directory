package shared

import (
	"time"
)

// PredictorSummary
// Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed <code>PredictorArn</code>.
type PredictorSummary struct {
	CreationTime         *time.Time `json:"CreationTime,omitempty"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn,omitempty"`
	LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
	Message              *string    `json:"Message,omitempty"`
	PredictorArn         *string    `json:"PredictorArn,omitempty"`
	PredictorName        *string    `json:"PredictorName,omitempty"`
	Status               *string    `json:"Status,omitempty"`
}
