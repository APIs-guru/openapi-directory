package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccessPreviewPathParams struct {
	AccessPreviewID string `pathParam:"style=simple,explode=false,name=accessPreviewId"`
}

type GetAccessPreviewQueryParams struct {
	AnalyzerArn string `queryParam:"style=form,explode=true,name=analyzerArn"`
}

type GetAccessPreviewHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAccessPreviewRequest struct {
	PathParams  GetAccessPreviewPathParams
	QueryParams GetAccessPreviewQueryParams
	Headers     GetAccessPreviewHeaders
}

type GetAccessPreviewResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetAccessPreviewResponse  *shared.GetAccessPreviewResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
