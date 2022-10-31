package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssessmentFrameworkPathParams struct {
	FrameworkID string `pathParam:"style=simple,explode=false,name=frameworkId"`
}

type GetAssessmentFrameworkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
