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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
