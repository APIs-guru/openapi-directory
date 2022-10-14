package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDocumentationPartPathParams struct {
	PartID    string `pathParam:"style=simple,explode=false,name=part_id"`
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateDocumentationPartHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDocumentationPartRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateDocumentationPartRequest struct {
	PathParams UpdateDocumentationPartPathParams
	Headers    UpdateDocumentationPartHeaders
	Request    UpdateDocumentationPartRequestBody `request:"mediaType=application/json"`
}

type UpdateDocumentationPartResponse struct {
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
