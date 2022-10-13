package operations

type DeleteAssessmentFrameworkPathParams struct {
	FrameworkID string `pathParam:"style=simple,explode=false,name=frameworkId"`
}

type DeleteAssessmentFrameworkHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAssessmentFrameworkRequest struct {
	PathParams DeleteAssessmentFrameworkPathParams
	Headers    DeleteAssessmentFrameworkHeaders
}

type DeleteAssessmentFrameworkResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	DeleteAssessmentFrameworkResponse map[string]interface{}
	InternalServerException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
