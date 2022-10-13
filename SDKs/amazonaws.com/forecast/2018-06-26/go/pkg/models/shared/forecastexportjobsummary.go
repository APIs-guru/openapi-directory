package shared

import (
	"time"
)

type ForecastExportJobSummary struct {
	CreationTime          *time.Time       `json:"CreationTime"`
	Destination           *DataDestination `json:"Destination"`
	ForecastExportJobArn  *string          `json:"ForecastExportJobArn"`
	ForecastExportJobName *string          `json:"ForecastExportJobName"`
	LastModificationTime  *time.Time       `json:"LastModificationTime"`
	Message               *string          `json:"Message"`
	Status                *string          `json:"Status"`
}
