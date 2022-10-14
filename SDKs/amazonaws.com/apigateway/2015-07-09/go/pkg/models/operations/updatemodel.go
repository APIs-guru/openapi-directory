package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateModelPathParams struct {
	ModelName string `pathParam:"style=simple,explode=false,name=model_name"`
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateModelRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateModelRequest struct {
	PathParams UpdateModelPathParams
	Headers    UpdateModelHeaders
	Request    UpdateModelRequestBody `request:"mediaType=application/json"`
}

type UpdateModelResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	Model                    *shared.Model
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
