package shared

import (
	"time"
)

type PredictorSummary struct {
	CreationTime         *time.Time `json:"CreationTime,omitempty"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn,omitempty"`
	LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
	Message              *string    `json:"Message,omitempty"`
	PredictorArn         *string    `json:"PredictorArn,omitempty"`
	PredictorName        *string    `json:"PredictorName,omitempty"`
	Status               *string    `json:"Status,omitempty"`
}
