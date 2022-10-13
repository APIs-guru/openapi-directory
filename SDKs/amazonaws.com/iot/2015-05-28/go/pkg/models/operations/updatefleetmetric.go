package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFleetMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type UpdateFleetMetricHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFleetMetricRequestBodyAggregationType struct {
	Name   *shared.AggregationTypeNameEnum `json:"name"`
	Values []string                        `json:"values"`
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
	AggregationField *string                                      `json:"aggregationField"`
	AggregationType  *UpdateFleetMetricRequestBodyAggregationType `json:"aggregationType"`
	Description      *string                                      `json:"description"`
	ExpectedVersion  *int64                                       `json:"expectedVersion"`
	IndexName        string                                       `json:"indexName"`
	Period           *int64                                       `json:"period"`
	QueryString      *string                                      `json:"queryString"`
	QueryVersion     *string                                      `json:"queryVersion"`
	Unit             *UpdateFleetMetricRequestBodyUnitEnum        `json:"unit"`
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
