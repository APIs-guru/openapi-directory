package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDisassociateAssessmentReportEvidencePathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
}

type BatchDisassociateAssessmentReportEvidenceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type BatchDisassociateAssessmentReportEvidenceRequestBody struct {
	EvidenceFolderID string   `json:"evidenceFolderId"`
	EvidenceIds      []string `json:"evidenceIds"`
}

type BatchDisassociateAssessmentReportEvidenceRequest struct {
	PathParams BatchDisassociateAssessmentReportEvidencePathParams
	Headers    BatchDisassociateAssessmentReportEvidenceHeaders
	Request    BatchDisassociateAssessmentReportEvidenceRequestBody `request:"mediaType=application/json"`
}

type BatchDisassociateAssessmentReportEvidenceResponse struct {
	AccessDeniedException                             *interface{}
	BatchDisassociateAssessmentReportEvidenceResponse *shared.BatchDisassociateAssessmentReportEvidenceResponse
	ContentType                                       string
	InternalServerException                           *interface{}
	ResourceNotFoundException                         *interface{}
	StatusCode                                        int64
	ValidationException                               *interface{}
}
