package operations

type DeleteAssessmentFrameworkPathParams struct {
	FrameworkID string `pathParam:"style=simple,explode=false,name=frameworkId"`
}

type DeleteAssessmentFrameworkHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
