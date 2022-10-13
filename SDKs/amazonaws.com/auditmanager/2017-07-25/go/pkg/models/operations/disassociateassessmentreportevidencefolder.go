package operations

type DisassociateAssessmentReportEvidenceFolderPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type DisassociateAssessmentReportEvidenceFolderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DisassociateAssessmentReportEvidenceFolderRequestBody struct {
	EvidenceFolderID string `json:"evidenceFolderId"`
}

type DisassociateAssessmentReportEvidenceFolderRequest struct {
	PathParams DisassociateAssessmentReportEvidenceFolderPathParams
	Headers    DisassociateAssessmentReportEvidenceFolderHeaders
	Request    DisassociateAssessmentReportEvidenceFolderRequestBody `request:"mediaType=application/json"`
}

type DisassociateAssessmentReportEvidenceFolderResponse struct {
	AccessDeniedException                              *interface{}
	ContentType                                        string
	DisassociateAssessmentReportEvidenceFolderResponse map[string]interface{}
	InternalServerException                            *interface{}
	ResourceNotFoundException                          *interface{}
	StatusCode                                         int64
	ValidationException                                *interface{}
}
