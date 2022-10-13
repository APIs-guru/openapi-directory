package shared

import (
	"time"
)

type ForecastSummary struct {
	CreationTime         *time.Time `json:"CreationTime"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn"`
	ForecastArn          *string    `json:"ForecastArn"`
	ForecastName         *string    `json:"ForecastName"`
	LastModificationTime *time.Time `json:"LastModificationTime"`
	Message              *string    `json:"Message"`
	PredictorArn         *string    `json:"PredictorArn"`
	Status               *string    `json:"Status"`
}
