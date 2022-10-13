package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvidenceFolderPathParams struct {
	AssessmentID     string `pathParam:"style=simple,explode=false,name=assessmentId"`
	ControlSetID     string `pathParam:"style=simple,explode=false,name=controlSetId"`
	EvidenceFolderID string `pathParam:"style=simple,explode=false,name=evidenceFolderId"`
}

type GetEvidenceFolderHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEvidenceFolderRequest struct {
	PathParams GetEvidenceFolderPathParams
	Headers    GetEvidenceFolderHeaders
}

type GetEvidenceFolderResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetEvidenceFolderResponse *shared.GetEvidenceFolderResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
