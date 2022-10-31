package shared

import (
	"time"
)

type ForecastSummary struct {
	CreationTime         *time.Time `json:"CreationTime,omitempty"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn,omitempty"`
	ForecastArn          *string    `json:"ForecastArn,omitempty"`
	ForecastName         *string    `json:"ForecastName,omitempty"`
	LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
	Message              *string    `json:"Message,omitempty"`
	PredictorArn         *string    `json:"PredictorArn,omitempty"`
	Status               *string    `json:"Status,omitempty"`
}
