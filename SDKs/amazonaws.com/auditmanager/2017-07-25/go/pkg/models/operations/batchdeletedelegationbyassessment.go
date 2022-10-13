package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteDelegationByAssessmentPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type BatchDeleteDelegationByAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDeleteDelegationByAssessmentRequestBody struct {
	DelegationIds []string `json:"delegationIds"`
}

type BatchDeleteDelegationByAssessmentRequest struct {
	PathParams BatchDeleteDelegationByAssessmentPathParams
	Headers    BatchDeleteDelegationByAssessmentHeaders
	Request    BatchDeleteDelegationByAssessmentRequestBody `request:"mediaType=application/json"`
}

type BatchDeleteDelegationByAssessmentResponse struct {
	AccessDeniedException                     *interface{}
	BatchDeleteDelegationByAssessmentResponse *shared.BatchDeleteDelegationByAssessmentResponse
	ContentType                               string
	InternalServerException                   *interface{}
	ResourceNotFoundException                 *interface{}
	StatusCode                                int64
	ValidationException                       *interface{}
}
