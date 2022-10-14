package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentationVersionPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateDocumentationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDocumentationVersionRequestBody struct {
	Description          *string `json:"description,omitempty"`
	DocumentationVersion string  `json:"documentationVersion"`
	StageName            *string `json:"stageName,omitempty"`
}

type CreateDocumentationVersionRequest struct {
	PathParams CreateDocumentationVersionPathParams
	Headers    CreateDocumentationVersionHeaders
	Request    CreateDocumentationVersionRequestBody `request:"mediaType=application/json"`
}

type CreateDocumentationVersionResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	DocumentationVersion     *shared.DocumentationVersion
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
