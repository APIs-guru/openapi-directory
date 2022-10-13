package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssessmentPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type GetAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssessmentRequest struct {
	PathParams GetAssessmentPathParams
	Headers    GetAssessmentHeaders
}

type GetAssessmentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetAssessmentResponse     *shared.GetAssessmentResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
