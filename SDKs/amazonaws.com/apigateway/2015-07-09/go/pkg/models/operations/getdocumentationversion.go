package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentationVersionPathParams struct {
	DocVersion string `pathParam:"style=simple,explode=false,name=doc_version"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetDocumentationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDocumentationVersionRequest struct {
	PathParams GetDocumentationVersionPathParams
	Headers    GetDocumentationVersionHeaders
}

type GetDocumentationVersionResponse struct {
	ContentType              string
	DocumentationVersion     *shared.DocumentationVersion
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
