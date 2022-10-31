package shared

import (
"time")

type DescribeForecastExportJobResponse struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Destination *DataDestination `json:"Destination,omitempty"`
    ForecastArn *string `json:"ForecastArn,omitempty"`
    ForecastExportJobArn *string `json:"ForecastExportJobArn,omitempty"`
    ForecastExportJobName *string `json:"ForecastExportJobName,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    Message *string `json:"Message,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

