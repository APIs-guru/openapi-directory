package shared

import (
	"time"
)

type UpdateCustomMetricResponse struct {
	CreationDate     *time.Time            `json:"creationDate"`
	DisplayName      *string               `json:"displayName"`
	LastModifiedDate *time.Time            `json:"lastModifiedDate"`
	MetricArn        *string               `json:"metricArn"`
	MetricName       *string               `json:"metricName"`
	MetricType       *CustomMetricTypeEnum `json:"metricType"`
}
