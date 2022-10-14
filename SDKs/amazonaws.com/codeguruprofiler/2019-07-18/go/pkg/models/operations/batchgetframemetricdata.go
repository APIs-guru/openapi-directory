package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type BatchGetFrameMetricDataPathParams struct {
	ProfilingGroupName string `pathParam:"style=simple,explode=false,name=profilingGroupName"`
}

type BatchGetFrameMetricDataTargetResolutionEnum string

const (
	BatchGetFrameMetricDataTargetResolutionEnumPt5M BatchGetFrameMetricDataTargetResolutionEnum = "PT5M"
	BatchGetFrameMetricDataTargetResolutionEnumPt1H BatchGetFrameMetricDataTargetResolutionEnum = "PT1H"
	BatchGetFrameMetricDataTargetResolutionEnumP1D  BatchGetFrameMetricDataTargetResolutionEnum = "P1D"
)

type BatchGetFrameMetricDataQueryParams struct {
	EndTime          *time.Time                                   `queryParam:"style=form,explode=true,name=endTime"`
	Period           *string                                      `queryParam:"style=form,explode=true,name=period"`
	StartTime        *time.Time                                   `queryParam:"style=form,explode=true,name=startTime"`
	TargetResolution *BatchGetFrameMetricDataTargetResolutionEnum `queryParam:"style=form,explode=true,name=targetResolution"`
}

type BatchGetFrameMetricDataHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchGetFrameMetricDataRequestBody struct {
	FrameMetrics []shared.FrameMetric `json:"frameMetrics,omitempty"`
}

type BatchGetFrameMetricDataRequest struct {
	PathParams  BatchGetFrameMetricDataPathParams
	QueryParams BatchGetFrameMetricDataQueryParams
	Headers     BatchGetFrameMetricDataHeaders
	Request     BatchGetFrameMetricDataRequestBody `request:"mediaType=application/json"`
}

type BatchGetFrameMetricDataResponse struct {
	BatchGetFrameMetricDataResponse *shared.BatchGetFrameMetricDataResponse
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
