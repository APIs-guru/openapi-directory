package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJobExecutionPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type UpdateJobExecutionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
	ExecutionNumber          *int64                                  `json:"executionNumber,omitempty"`
	ExpectedVersion          *int64                                  `json:"expectedVersion,omitempty"`
	IncludeJobDocument       *bool                                   `json:"includeJobDocument,omitempty"`
	IncludeJobExecutionState *bool                                   `json:"includeJobExecutionState,omitempty"`
	Status                   UpdateJobExecutionRequestBodyStatusEnum `json:"status"`
	StatusDetails            map[string]string                       `json:"statusDetails,omitempty"`
	StepTimeoutInMinutes     *int64                                  `json:"stepTimeoutInMinutes,omitempty"`
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
