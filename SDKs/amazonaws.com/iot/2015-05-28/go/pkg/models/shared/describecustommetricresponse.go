package shared

import (
	"time"
)

type DescribeCustomMetricResponse struct {
	CreationDate     *time.Time            `json:"creationDate"`
	DisplayName      *string               `json:"displayName"`
	LastModifiedDate *time.Time            `json:"lastModifiedDate"`
	MetricArn        *string               `json:"metricArn"`
	MetricName       *string               `json:"metricName"`
	MetricType       *CustomMetricTypeEnum `json:"metricType"`
}
