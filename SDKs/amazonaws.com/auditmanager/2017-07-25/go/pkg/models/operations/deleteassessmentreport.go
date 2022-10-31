package operations

type DeleteAssessmentReportPathParams struct {
	AssessmentID       string `pathParam:"style=simple,explode=false,name=assessmentId"`
	AssessmentReportID string `pathParam:"style=simple,explode=false,name=assessmentReportId"`
}

type DeleteAssessmentReportHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteAssessmentReportRequest struct {
	PathParams DeleteAssessmentReportPathParams
	Headers    DeleteAssessmentReportHeaders
}

type DeleteAssessmentReportResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	DeleteAssessmentReportResponse map[string]interface{}
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
