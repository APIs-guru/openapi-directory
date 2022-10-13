package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFleetMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type CreateFleetMetricHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFleetMetricRequestBodyAggregationType struct {
	Name   *shared.AggregationTypeNameEnum `json:"name"`
	Values []string                        `json:"values"`
}

type CreateFleetMetricRequestBodyUnitEnum string

const (
	CreateFleetMetricRequestBodyUnitEnumSeconds         CreateFleetMetricRequestBodyUnitEnum = "Seconds"
	CreateFleetMetricRequestBodyUnitEnumMicroseconds    CreateFleetMetricRequestBodyUnitEnum = "Microseconds"
	CreateFleetMetricRequestBodyUnitEnumMilliseconds    CreateFleetMetricRequestBodyUnitEnum = "Milliseconds"
	CreateFleetMetricRequestBodyUnitEnumBytes           CreateFleetMetricRequestBodyUnitEnum = "Bytes"
	CreateFleetMetricRequestBodyUnitEnumKilobytes       CreateFleetMetricRequestBodyUnitEnum = "Kilobytes"
	CreateFleetMetricRequestBodyUnitEnumMegabytes       CreateFleetMetricRequestBodyUnitEnum = "Megabytes"
	CreateFleetMetricRequestBodyUnitEnumGigabytes       CreateFleetMetricRequestBodyUnitEnum = "Gigabytes"
	CreateFleetMetricRequestBodyUnitEnumTerabytes       CreateFleetMetricRequestBodyUnitEnum = "Terabytes"
	CreateFleetMetricRequestBodyUnitEnumBits            CreateFleetMetricRequestBodyUnitEnum = "Bits"
	CreateFleetMetricRequestBodyUnitEnumKilobits        CreateFleetMetricRequestBodyUnitEnum = "Kilobits"
	CreateFleetMetricRequestBodyUnitEnumMegabits        CreateFleetMetricRequestBodyUnitEnum = "Megabits"
	CreateFleetMetricRequestBodyUnitEnumGigabits        CreateFleetMetricRequestBodyUnitEnum = "Gigabits"
	CreateFleetMetricRequestBodyUnitEnumTerabits        CreateFleetMetricRequestBodyUnitEnum = "Terabits"
	CreateFleetMetricRequestBodyUnitEnumPercent         CreateFleetMetricRequestBodyUnitEnum = "Percent"
	CreateFleetMetricRequestBodyUnitEnumCount           CreateFleetMetricRequestBodyUnitEnum = "Count"
	CreateFleetMetricRequestBodyUnitEnumBytesSecond     CreateFleetMetricRequestBodyUnitEnum = "Bytes/Second"
	CreateFleetMetricRequestBodyUnitEnumKilobytesSecond CreateFleetMetricRequestBodyUnitEnum = "Kilobytes/Second"
	CreateFleetMetricRequestBodyUnitEnumMegabytesSecond CreateFleetMetricRequestBodyUnitEnum = "Megabytes/Second"
	CreateFleetMetricRequestBodyUnitEnumGigabytesSecond CreateFleetMetricRequestBodyUnitEnum = "Gigabytes/Second"
	CreateFleetMetricRequestBodyUnitEnumTerabytesSecond CreateFleetMetricRequestBodyUnitEnum = "Terabytes/Second"
	CreateFleetMetricRequestBodyUnitEnumBitsSecond      CreateFleetMetricRequestBodyUnitEnum = "Bits/Second"
	CreateFleetMetricRequestBodyUnitEnumKilobitsSecond  CreateFleetMetricRequestBodyUnitEnum = "Kilobits/Second"
	CreateFleetMetricRequestBodyUnitEnumMegabitsSecond  CreateFleetMetricRequestBodyUnitEnum = "Megabits/Second"
	CreateFleetMetricRequestBodyUnitEnumGigabitsSecond  CreateFleetMetricRequestBodyUnitEnum = "Gigabits/Second"
	CreateFleetMetricRequestBodyUnitEnumTerabitsSecond  CreateFleetMetricRequestBodyUnitEnum = "Terabits/Second"
	CreateFleetMetricRequestBodyUnitEnumCountSecond     CreateFleetMetricRequestBodyUnitEnum = "Count/Second"
	CreateFleetMetricRequestBodyUnitEnumNone            CreateFleetMetricRequestBodyUnitEnum = "None"
)

type CreateFleetMetricRequestBody struct {
	AggregationField string                                      `json:"aggregationField"`
	AggregationType  CreateFleetMetricRequestBodyAggregationType `json:"aggregationType"`
	Description      *string                                     `json:"description"`
	IndexName        *string                                     `json:"indexName"`
	Period           int64                                       `json:"period"`
	QueryString      string                                      `json:"queryString"`
	QueryVersion     *string                                     `json:"queryVersion"`
	Tags             []shared.Tag                                `json:"tags"`
	Unit             *CreateFleetMetricRequestBodyUnitEnum       `json:"unit"`
}

type CreateFleetMetricRequest struct {
	PathParams CreateFleetMetricPathParams
	Headers    CreateFleetMetricHeaders
	Request    CreateFleetMetricRequestBody `request:"mediaType=application/json"`
}

type CreateFleetMetricResponse struct {
	ContentType                    string
	CreateFleetMetricResponse      *shared.CreateFleetMetricResponse
	IndexNotReadyException         *interface{}
	InternalFailureException       *interface{}
	InvalidAggregationException    *interface{}
	InvalidQueryException          *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
