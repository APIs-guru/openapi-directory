package shared

import (
	"time"
)

type DescribeFleetMetricResponse struct {
	AggregationField *string              `json:"aggregationField"`
	AggregationType  *AggregationType     `json:"aggregationType"`
	CreationDate     *time.Time           `json:"creationDate"`
	Description      *string              `json:"description"`
	IndexName        *string              `json:"indexName"`
	LastModifiedDate *time.Time           `json:"lastModifiedDate"`
	MetricArn        *string              `json:"metricArn"`
	MetricName       *string              `json:"metricName"`
	Period           *int64               `json:"period"`
	QueryString      *string              `json:"queryString"`
	QueryVersion     *string              `json:"queryVersion"`
	Unit             *FleetMetricUnitEnum `json:"unit"`
	Version          *int64               `json:"version"`
}
