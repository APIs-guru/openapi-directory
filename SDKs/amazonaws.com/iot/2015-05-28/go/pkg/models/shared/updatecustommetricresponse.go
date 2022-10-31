package shared

import (
"time")

type UpdateCustomMetricResponse struct {
    CreationDate *time.Time `json:"creationDate,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    MetricArn *string `json:"metricArn,omitempty"`
    MetricName *string `json:"metricName,omitempty"`
    MetricType *CustomMetricTypeEnum `json:"metricType,omitempty"`
    
}

