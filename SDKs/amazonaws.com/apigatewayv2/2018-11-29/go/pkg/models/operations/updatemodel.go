package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateModelPathParams struct {
	APIID   string `pathParam:"style=simple,explode=false,name=apiId"`
	ModelID string `pathParam:"style=simple,explode=false,name=modelId"`
}

type UpdateModelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateModelRequestBody struct {
	ContentType *string `json:"contentType,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Schema      *string `json:"schema,omitempty"`
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
