package shared

import (
	"time"
)

type DescribeForecastResponse struct {
	CreationTime                    *time.Time `json:"CreationTime"`
	DatasetGroupArn                 *string    `json:"DatasetGroupArn"`
	EstimatedTimeRemainingInMinutes *int64     `json:"EstimatedTimeRemainingInMinutes"`
	ForecastArn                     *string    `json:"ForecastArn"`
	ForecastName                    *string    `json:"ForecastName"`
	ForecastTypes                   []string   `json:"ForecastTypes"`
	LastModificationTime            *time.Time `json:"LastModificationTime"`
	Message                         *string    `json:"Message"`
	PredictorArn                    *string    `json:"PredictorArn"`
	Status                          *string    `json:"Status"`
}
