package operations

import (
	"openapi/pkg/models/shared"
)

type BatchAssociateAssessmentReportEvidencePathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type BatchAssociateAssessmentReportEvidenceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchAssociateAssessmentReportEvidenceRequestBody struct {
	EvidenceFolderID string   `json:"evidenceFolderId"`
	EvidenceIds      []string `json:"evidenceIds"`
}

type BatchAssociateAssessmentReportEvidenceRequest struct {
	PathParams BatchAssociateAssessmentReportEvidencePathParams
	Headers    BatchAssociateAssessmentReportEvidenceHeaders
	Request    BatchAssociateAssessmentReportEvidenceRequestBody `request:"mediaType=application/json"`
}

type BatchAssociateAssessmentReportEvidenceResponse struct {
	AccessDeniedException                          *interface{}
	BatchAssociateAssessmentReportEvidenceResponse *shared.BatchAssociateAssessmentReportEvidenceResponse
	ContentType                                    string
	InternalServerException                        *interface{}
	ResourceNotFoundException                      *interface{}
	StatusCode                                     int64
	ValidationException                            *interface{}
}
