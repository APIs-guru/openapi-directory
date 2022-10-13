package operations

import (
	"openapi/pkg/models/shared"
)

type GetFindingPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFindingQueryParams struct {
	AnalyzerArn string `queryParam:"style=form,explode=true,name=analyzerArn"`
}

type GetFindingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFindingRequest struct {
	PathParams  GetFindingPathParams
	QueryParams GetFindingQueryParams
	Headers     GetFindingHeaders
}

type GetFindingResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetFindingResponse        *shared.GetFindingResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
