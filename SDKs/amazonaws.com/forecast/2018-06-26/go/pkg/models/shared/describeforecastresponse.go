package shared

import (
"time")

type DescribeForecastResponse struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DatasetGroupArn *string `json:"DatasetGroupArn,omitempty"`
    EstimatedTimeRemainingInMinutes *int64 `json:"EstimatedTimeRemainingInMinutes,omitempty"`
    ForecastArn *string `json:"ForecastArn,omitempty"`
    ForecastName *string `json:"ForecastName,omitempty"`
    ForecastTypes []string `json:"ForecastTypes,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    Message *string `json:"Message,omitempty"`
    PredictorArn *string `json:"PredictorArn,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

