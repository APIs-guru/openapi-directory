package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJobExecutionPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type UpdateJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateJobExecutionRequestBodyStatusEnum string

const (
	UpdateJobExecutionRequestBodyStatusEnumQueued     UpdateJobExecutionRequestBodyStatusEnum = "QUEUED"
	UpdateJobExecutionRequestBodyStatusEnumInProgress UpdateJobExecutionRequestBodyStatusEnum = "IN_PROGRESS"
	UpdateJobExecutionRequestBodyStatusEnumSucceeded  UpdateJobExecutionRequestBodyStatusEnum = "SUCCEEDED"
	UpdateJobExecutionRequestBodyStatusEnumFailed     UpdateJobExecutionRequestBodyStatusEnum = "FAILED"
	UpdateJobExecutionRequestBodyStatusEnumTimedOut   UpdateJobExecutionRequestBodyStatusEnum = "TIMED_OUT"
	UpdateJobExecutionRequestBodyStatusEnumRejected   UpdateJobExecutionRequestBodyStatusEnum = "REJECTED"
	UpdateJobExecutionRequestBodyStatusEnumRemoved    UpdateJobExecutionRequestBodyStatusEnum = "REMOVED"
	UpdateJobExecutionRequestBodyStatusEnumCanceled   UpdateJobExecutionRequestBodyStatusEnum = "CANCELED"
)

type UpdateJobExecutionRequestBody struct {
	ExecutionNumber          *int64                                  `json:"executionNumber"`
	ExpectedVersion          *int64                                  `json:"expectedVersion"`
	IncludeJobDocument       *bool                                   `json:"includeJobDocument"`
	IncludeJobExecutionState *bool                                   `json:"includeJobExecutionState"`
	Status                   UpdateJobExecutionRequestBodyStatusEnum `json:"status"`
	StatusDetails            map[string]string                       `json:"statusDetails"`
	StepTimeoutInMinutes     *int64                                  `json:"stepTimeoutInMinutes"`
}

type UpdateJobExecutionRequest struct {
	PathParams UpdateJobExecutionPathParams
	Headers    UpdateJobExecutionHeaders
	Request    UpdateJobExecutionRequestBody `request:"mediaType=application/json"`
}

type UpdateJobExecutionResponse struct {
	CertificateValidationException  *interface{}
	ContentType                     string
	InvalidRequestException         *interface{}
	InvalidStateTransitionException *interface{}
	ResourceNotFoundException       *interface{}
	ServiceUnavailableException     *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	UpdateJobExecutionResponse      *shared.UpdateJobExecutionResponse
}
