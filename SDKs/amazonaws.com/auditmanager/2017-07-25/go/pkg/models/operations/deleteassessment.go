package operations

type DeleteAssessmentPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type DeleteAssessmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteAssessmentRequest struct {
	PathParams DeleteAssessmentPathParams
	Headers    DeleteAssessmentHeaders
}

type DeleteAssessmentResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteAssessmentResponse  map[string]interface{}
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
