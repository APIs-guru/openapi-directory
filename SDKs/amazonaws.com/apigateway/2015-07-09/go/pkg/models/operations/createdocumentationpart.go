package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentationPartPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateDocumentationPartHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDocumentationPartRequestBodyLocation struct {
	Method     *string                           `json:"method"`
	Name       *string                           `json:"name"`
	Path       *string                           `json:"path"`
	StatusCode *string                           `json:"statusCode"`
	Type       *shared.DocumentationPartTypeEnum `json:"type"`
}

type CreateDocumentationPartRequestBody struct {
	Location   CreateDocumentationPartRequestBodyLocation `json:"location"`
	Properties string                                     `json:"properties"`
}

type CreateDocumentationPartRequest struct {
	PathParams CreateDocumentationPartPathParams
	Headers    CreateDocumentationPartHeaders
	Request    CreateDocumentationPartRequestBody `request:"mediaType=application/json"`
}

type CreateDocumentationPartResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	DocumentationPart        *shared.DocumentationPart
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
