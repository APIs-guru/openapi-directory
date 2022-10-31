package operations

import (
	"time"
)

type GetGetPredictiveScalingForecastActionEnum string

const (
	GetGetPredictiveScalingForecastActionEnumGetPredictiveScalingForecast GetGetPredictiveScalingForecastActionEnum = "GetPredictiveScalingForecast"
)

type GetGetPredictiveScalingForecastVersionEnum string

const (
	GetGetPredictiveScalingForecastVersionEnumTwoThousandAndEleven0101 GetGetPredictiveScalingForecastVersionEnum = "2011-01-01"
)

type GetGetPredictiveScalingForecastQueryParams struct {
	Action               GetGetPredictiveScalingForecastActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                     `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	EndTime              time.Time                                  `queryParam:"style=form,explode=true,name=EndTime"`
	PolicyName           string                                     `queryParam:"style=form,explode=true,name=PolicyName"`
	StartTime            time.Time                                  `queryParam:"style=form,explode=true,name=StartTime"`
	Version              GetGetPredictiveScalingForecastVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetPredictiveScalingForecastHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetPredictiveScalingForecastRequest struct {
	QueryParams GetGetPredictiveScalingForecastQueryParams
	Headers     GetGetPredictiveScalingForecastHeaders
}

type GetGetPredictiveScalingForecastResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
