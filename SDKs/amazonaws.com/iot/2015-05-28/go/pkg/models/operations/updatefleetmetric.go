package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFleetMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type UpdateFleetMetricHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateFleetMetricRequestBodyAggregationType
// The type of aggregation queries.
type UpdateFleetMetricRequestBodyAggregationType struct {
	Name   *shared.AggregationTypeNameEnum `json:"name,omitempty"`
	Values []string                        `json:"values,omitempty"`
}

type UpdateFleetMetricRequestBodyUnitEnum string

const (
	UpdateFleetMetricRequestBodyUnitEnumSeconds         UpdateFleetMetricRequestBodyUnitEnum = "Seconds"
	UpdateFleetMetricRequestBodyUnitEnumMicroseconds    UpdateFleetMetricRequestBodyUnitEnum = "Microseconds"
	UpdateFleetMetricRequestBodyUnitEnumMilliseconds    UpdateFleetMetricRequestBodyUnitEnum = "Milliseconds"
	UpdateFleetMetricRequestBodyUnitEnumBytes           UpdateFleetMetricRequestBodyUnitEnum = "Bytes"
	UpdateFleetMetricRequestBodyUnitEnumKilobytes       UpdateFleetMetricRequestBodyUnitEnum = "Kilobytes"
	UpdateFleetMetricRequestBodyUnitEnumMegabytes       UpdateFleetMetricRequestBodyUnitEnum = "Megabytes"
	UpdateFleetMetricRequestBodyUnitEnumGigabytes       UpdateFleetMetricRequestBodyUnitEnum = "Gigabytes"
	UpdateFleetMetricRequestBodyUnitEnumTerabytes       UpdateFleetMetricRequestBodyUnitEnum = "Terabytes"
	UpdateFleetMetricRequestBodyUnitEnumBits            UpdateFleetMetricRequestBodyUnitEnum = "Bits"
	UpdateFleetMetricRequestBodyUnitEnumKilobits        UpdateFleetMetricRequestBodyUnitEnum = "Kilobits"
	UpdateFleetMetricRequestBodyUnitEnumMegabits        UpdateFleetMetricRequestBodyUnitEnum = "Megabits"
	UpdateFleetMetricRequestBodyUnitEnumGigabits        UpdateFleetMetricRequestBodyUnitEnum = "Gigabits"
	UpdateFleetMetricRequestBodyUnitEnumTerabits        UpdateFleetMetricRequestBodyUnitEnum = "Terabits"
	UpdateFleetMetricRequestBodyUnitEnumPercent         UpdateFleetMetricRequestBodyUnitEnum = "Percent"
	UpdateFleetMetricRequestBodyUnitEnumCount           UpdateFleetMetricRequestBodyUnitEnum = "Count"
	UpdateFleetMetricRequestBodyUnitEnumBytesSecond     UpdateFleetMetricRequestBodyUnitEnum = "Bytes/Second"
	UpdateFleetMetricRequestBodyUnitEnumKilobytesSecond UpdateFleetMetricRequestBodyUnitEnum = "Kilobytes/Second"
	UpdateFleetMetricRequestBodyUnitEnumMegabytesSecond UpdateFleetMetricRequestBodyUnitEnum = "Megabytes/Second"
	UpdateFleetMetricRequestBodyUnitEnumGigabytesSecond UpdateFleetMetricRequestBodyUnitEnum = "Gigabytes/Second"
	UpdateFleetMetricRequestBodyUnitEnumTerabytesSecond UpdateFleetMetricRequestBodyUnitEnum = "Terabytes/Second"
	UpdateFleetMetricRequestBodyUnitEnumBitsSecond      UpdateFleetMetricRequestBodyUnitEnum = "Bits/Second"
	UpdateFleetMetricRequestBodyUnitEnumKilobitsSecond  UpdateFleetMetricRequestBodyUnitEnum = "Kilobits/Second"
	UpdateFleetMetricRequestBodyUnitEnumMegabitsSecond  UpdateFleetMetricRequestBodyUnitEnum = "Megabits/Second"
	UpdateFleetMetricRequestBodyUnitEnumGigabitsSecond  UpdateFleetMetricRequestBodyUnitEnum = "Gigabits/Second"
	UpdateFleetMetricRequestBodyUnitEnumTerabitsSecond  UpdateFleetMetricRequestBodyUnitEnum = "Terabits/Second"
	UpdateFleetMetricRequestBodyUnitEnumCountSecond     UpdateFleetMetricRequestBodyUnitEnum = "Count/Second"
	UpdateFleetMetricRequestBodyUnitEnumNone            UpdateFleetMetricRequestBodyUnitEnum = "None"
)

type UpdateFleetMetricRequestBody struct {
	AggregationField *string                                      `json:"aggregationField,omitempty"`
	AggregationType  *UpdateFleetMetricRequestBodyAggregationType `json:"aggregationType,omitempty"`
	Description      *string                                      `json:"description,omitempty"`
	ExpectedVersion  *int64                                       `json:"expectedVersion,omitempty"`
	IndexName        string                                       `json:"indexName"`
	Period           *int64                                       `json:"period,omitempty"`
	QueryString      *string                                      `json:"queryString,omitempty"`
	QueryVersion     *string                                      `json:"queryVersion,omitempty"`
	Unit             *UpdateFleetMetricRequestBodyUnitEnum        `json:"unit,omitempty"`
}

type UpdateFleetMetricRequest struct {
	PathParams UpdateFleetMetricPathParams
	Headers    UpdateFleetMetricHeaders
	Request    UpdateFleetMetricRequestBody `request:"mediaType=application/json"`
}

type UpdateFleetMetricResponse struct {
	ContentType                 string
	IndexNotReadyException      *interface{}
	InternalFailureException    *interface{}
	InvalidAggregationException *interface{}
	InvalidQueryException       *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	VersionConflictException    *interface{}
}
