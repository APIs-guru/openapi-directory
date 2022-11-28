package shared

import (
	"time"
)

// ForecastSummary
// Provides a summary of the forecast properties used in the <a>ListForecasts</a> operation. To get the complete set of properties, call the <a>DescribeForecast</a> operation, and provide the <code>ForecastArn</code> that is listed in the summary.
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
