package shared

import (
"time")

type DescribeFleetMetricResponse struct {
    AggregationField *string `json:"aggregationField,omitempty"`
    AggregationType *AggregationType `json:"aggregationType,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    Description *string `json:"description,omitempty"`
    IndexName *string `json:"indexName,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    MetricArn *string `json:"metricArn,omitempty"`
    MetricName *string `json:"metricName,omitempty"`
    Period *int64 `json:"period,omitempty"`
    QueryString *string `json:"queryString,omitempty"`
    QueryVersion *string `json:"queryVersion,omitempty"`
    Unit *FleetMetricUnitEnum `json:"unit,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

