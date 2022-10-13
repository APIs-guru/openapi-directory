package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvidenceFoldersByAssessmentControlPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	ControlID    string `pathParam:"style=simple,explode=false,name=controlId"`
	ControlSetID string `pathParam:"style=simple,explode=false,name=controlSetId"`
}

type GetEvidenceFoldersByAssessmentControlQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetEvidenceFoldersByAssessmentControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEvidenceFoldersByAssessmentControlRequest struct {
	PathParams  GetEvidenceFoldersByAssessmentControlPathParams
	QueryParams GetEvidenceFoldersByAssessmentControlQueryParams
	Headers     GetEvidenceFoldersByAssessmentControlHeaders
}

type GetEvidenceFoldersByAssessmentControlResponse struct {
	AccessDeniedException                         *interface{}
	ContentType                                   string
	GetEvidenceFoldersByAssessmentControlResponse *shared.GetEvidenceFoldersByAssessmentControlResponse
	InternalServerException                       *interface{}
	ResourceNotFoundException                     *interface{}
	StatusCode                                    int64
	ValidationException                           *interface{}
}
