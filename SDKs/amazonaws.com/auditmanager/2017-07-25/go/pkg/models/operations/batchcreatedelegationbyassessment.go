package operations

import (
	"openapi/pkg/models/shared"
)

type BatchCreateDelegationByAssessmentPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type BatchCreateDelegationByAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchCreateDelegationByAssessmentRequestBody struct {
	CreateDelegationRequests []shared.CreateDelegationRequest `json:"createDelegationRequests"`
}

type BatchCreateDelegationByAssessmentRequest struct {
	PathParams BatchCreateDelegationByAssessmentPathParams
	Headers    BatchCreateDelegationByAssessmentHeaders
	Request    BatchCreateDelegationByAssessmentRequestBody `request:"mediaType=application/json"`
}

type BatchCreateDelegationByAssessmentResponse struct {
	AccessDeniedException                     *interface{}
	BatchCreateDelegationByAssessmentResponse *shared.BatchCreateDelegationByAssessmentResponse
	ContentType                               string
	InternalServerException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ValidationException                       *interface{}
}
