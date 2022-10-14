package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDocumentationVersionPathParams struct {
	DocVersion string `pathParam:"style=simple,explode=false,name=doc_version"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateDocumentationVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDocumentationVersionRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateDocumentationVersionRequest struct {
	PathParams UpdateDocumentationVersionPathParams
	Headers    UpdateDocumentationVersionHeaders
	Request    UpdateDocumentationVersionRequestBody `request:"mediaType=application/json"`
}

type UpdateDocumentationVersionResponse struct {
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
