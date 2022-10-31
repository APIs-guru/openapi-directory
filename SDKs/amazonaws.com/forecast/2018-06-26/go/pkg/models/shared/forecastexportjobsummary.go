package shared

import (
"time")

type ForecastExportJobSummary struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Destination *DataDestination `json:"Destination,omitempty"`
    ForecastExportJobArn *string `json:"ForecastExportJobArn,omitempty"`
    ForecastExportJobName *string `json:"ForecastExportJobName,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    Message *string `json:"Message,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

