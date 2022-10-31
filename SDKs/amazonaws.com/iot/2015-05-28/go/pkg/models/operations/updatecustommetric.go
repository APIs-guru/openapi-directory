package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCustomMetricPathParams struct {
	MetricName string `pathParam:"style=simple,explode=false,name=metricName"`
}

type UpdateCustomMetricHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateCustomMetricRequestBody struct {
	DisplayName string `json:"displayName"`
}

type UpdateCustomMetricRequest struct {
	PathParams UpdateCustomMetricPathParams
	Headers    UpdateCustomMetricHeaders
	Request    UpdateCustomMetricRequestBody `request:"mediaType=application/json"`
}

type UpdateCustomMetricResponse struct {
	ContentType                string
	InternalFailureException   *interface{}
	InvalidRequestException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateCustomMetricResponse *shared.UpdateCustomMetricResponse
}
