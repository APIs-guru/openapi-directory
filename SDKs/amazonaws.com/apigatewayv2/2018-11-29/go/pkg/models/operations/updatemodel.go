package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateModelPathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
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
	ContentType *string `json:"contentType"`
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Schema      *string `json:"schema"`
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
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateModelResponse      *shared.UpdateModelResponse
}
