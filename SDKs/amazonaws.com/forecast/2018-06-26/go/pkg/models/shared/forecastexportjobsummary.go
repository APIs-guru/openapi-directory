package shared

import (
	"time"
)

// ForecastExportJobSummary
// Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.
type ForecastExportJobSummary struct {
	CreationTime          *time.Time       `json:"CreationTime,omitempty"`
	Destination           *DataDestination `json:"Destination,omitempty"`
	ForecastExportJobArn  *string          `json:"ForecastExportJobArn,omitempty"`
	ForecastExportJobName *string          `json:"ForecastExportJobName,omitempty"`
	LastModificationTime  *time.Time       `json:"LastModificationTime,omitempty"`
	Message               *string          `json:"Message,omitempty"`
	Status                *string          `json:"Status,omitempty"`
}
