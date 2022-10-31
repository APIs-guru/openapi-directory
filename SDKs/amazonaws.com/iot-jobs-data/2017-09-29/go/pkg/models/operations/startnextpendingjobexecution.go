package operations

import (
	"openapi/pkg/models/shared"
)

type StartNextPendingJobExecutionPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type StartNextPendingJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type StartNextPendingJobExecutionRequestBody struct {
	StatusDetails        map[string]string `json:"statusDetails,omitempty"`
	StepTimeoutInMinutes *int64            `json:"stepTimeoutInMinutes,omitempty"`
}

type StartNextPendingJobExecutionRequest struct {
	PathParams StartNextPendingJobExecutionPathParams
	Headers    StartNextPendingJobExecutionHeaders
	Request    StartNextPendingJobExecutionRequestBody `request:"mediaType=application/json"`
}

type StartNextPendingJobExecutionResponse struct {
	CertificateValidationException       *interface{}
	ContentType                          string
	InvalidRequestException              *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StartNextPendingJobExecutionResponse *shared.StartNextPendingJobExecutionResponse
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
