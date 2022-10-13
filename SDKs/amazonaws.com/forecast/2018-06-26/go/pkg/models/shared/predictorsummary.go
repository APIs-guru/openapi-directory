package shared

import (
	"time"
)

type PredictorSummary struct {
	CreationTime         *time.Time `json:"CreationTime"`
	DatasetGroupArn      *string    `json:"DatasetGroupArn"`
	LastModificationTime *time.Time `json:"LastModificationTime"`
	Message              *string    `json:"Message"`
	PredictorArn         *string    `json:"PredictorArn"`
	PredictorName        *string    `json:"PredictorName"`
	Status               *string    `json:"Status"`
}
