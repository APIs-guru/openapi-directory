package shared

import (
"time")

type ConformancePackDetail struct {
    ConformancePackArn string `json:"ConformancePackArn"`
    ConformancePackID string `json:"ConformancePackId"`
    ConformancePackInputParameters []ConformancePackInputParameter `json:"ConformancePackInputParameters,omitempty"`
    ConformancePackName string `json:"ConformancePackName"`
    CreatedBy *string `json:"CreatedBy,omitempty"`
    DeliveryS3Bucket *string `json:"DeliveryS3Bucket,omitempty"`
    DeliveryS3KeyPrefix *string `json:"DeliveryS3KeyPrefix,omitempty"`
    LastUpdateRequestedTime *time.Time `json:"LastUpdateRequestedTime,omitempty"`
    
}

