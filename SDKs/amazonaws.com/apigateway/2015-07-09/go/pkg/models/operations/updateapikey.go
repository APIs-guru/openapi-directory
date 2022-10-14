package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPIKeyPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_Key"`
}

type UpdateAPIKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAPIKeyRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateAPIKeyRequest struct {
	PathParams UpdateAPIKeyPathParams
	Headers    UpdateAPIKeyHeaders
	Request    UpdateAPIKeyRequestBody `request:"mediaType=application/json"`
}

type UpdateAPIKeyResponse struct {
	APIKey                   *shared.APIKey
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
