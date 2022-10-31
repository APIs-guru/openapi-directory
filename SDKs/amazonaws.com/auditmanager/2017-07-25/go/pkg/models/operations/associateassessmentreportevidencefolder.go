package operations

type AssociateAssessmentReportEvidenceFolderPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type AssociateAssessmentReportEvidenceFolderHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type AssociateAssessmentReportEvidenceFolderRequestBody struct {
	EvidenceFolderID string `json:"evidenceFolderId"`
}

type AssociateAssessmentReportEvidenceFolderRequest struct {
	PathParams AssociateAssessmentReportEvidenceFolderPathParams
	Headers    AssociateAssessmentReportEvidenceFolderHeaders
	Request    AssociateAssessmentReportEvidenceFolderRequestBody `request:"mediaType=application/json"`
}

type AssociateAssessmentReportEvidenceFolderResponse struct {
	AccessDeniedException                           *interface{}
	AssociateAssessmentReportEvidenceFolderResponse map[string]interface{}
	ContentType                                     string
	InternalServerException                         *interface{}
	ResourceNotFoundException                       *interface{}
	StatusCode                                      int64
	ValidationException                             *interface{}
}
