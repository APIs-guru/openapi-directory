package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRequestValidatorPathParams struct {
	RequestvalidatorID string `pathParam:"style=simple,explode=false,name=requestvalidator_id"`
	RestapiID          string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateRequestValidatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateRequestValidatorRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations"`
}

type UpdateRequestValidatorRequest struct {
	PathParams UpdateRequestValidatorPathParams
	Headers    UpdateRequestValidatorHeaders
	Request    UpdateRequestValidatorRequestBody `request:"mediaType=application/json"`
}

type UpdateRequestValidatorResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	RequestValidator         *shared.RequestValidator
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
