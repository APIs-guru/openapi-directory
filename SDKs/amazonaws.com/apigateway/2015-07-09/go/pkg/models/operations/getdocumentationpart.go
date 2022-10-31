package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentationPartPathParams struct {
	PartID    string `pathParam:"style=simple,explode=false,name=part_id"`
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetDocumentationPartHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDocumentationPartRequest struct {
	PathParams GetDocumentationPartPathParams
	Headers    GetDocumentationPartHeaders
}

type GetDocumentationPartResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DocumentationPart        *shared.DocumentationPart
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
