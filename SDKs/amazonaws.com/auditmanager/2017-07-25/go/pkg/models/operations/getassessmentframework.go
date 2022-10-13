package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssessmentFrameworkPathParams struct {
	FrameworkID string `pathParam:"style=simple,explode=false,name=frameworkId"`
}

type GetAssessmentFrameworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAssessmentFrameworkRequest struct {
	PathParams GetAssessmentFrameworkPathParams
	Headers    GetAssessmentFrameworkHeaders
}

type GetAssessmentFrameworkResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	GetAssessmentFrameworkResponse *shared.GetAssessmentFrameworkResponse
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
