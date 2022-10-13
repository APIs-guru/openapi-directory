package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvidenceByEvidenceFolderPathParams struct {
	AssessmentID     string `pathParam:"style=simple,explode=false,name=assessmentId"`
	ControlSetID     string `pathParam:"style=simple,explode=false,name=controlSetId"`
	EvidenceFolderID string `pathParam:"style=simple,explode=false,name=evidenceFolderId"`
}

type GetEvidenceByEvidenceFolderQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetEvidenceByEvidenceFolderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEvidenceByEvidenceFolderRequest struct {
	PathParams  GetEvidenceByEvidenceFolderPathParams
	QueryParams GetEvidenceByEvidenceFolderQueryParams
	Headers     GetEvidenceByEvidenceFolderHeaders
}

type GetEvidenceByEvidenceFolderResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	GetEvidenceByEvidenceFolderResponse *shared.GetEvidenceByEvidenceFolderResponse
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ValidationException                 *interface{}
}
