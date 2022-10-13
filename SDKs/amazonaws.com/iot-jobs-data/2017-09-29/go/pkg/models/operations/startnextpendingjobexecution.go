package operations

import (
	"openapi/pkg/models/shared"
)

type StartNextPendingJobExecutionPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type StartNextPendingJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartNextPendingJobExecutionRequestBody struct {
	StatusDetails        map[string]string `json:"statusDetails"`
	StepTimeoutInMinutes *int64            `json:"stepTimeoutInMinutes"`
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
