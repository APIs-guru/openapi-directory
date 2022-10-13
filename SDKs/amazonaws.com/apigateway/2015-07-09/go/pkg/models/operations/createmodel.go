package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateModelHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateModelRequestBody struct {
	ContentType string  `json:"contentType"`
	Description *string `json:"description"`
	Name        string  `json:"name"`
	Schema      *string `json:"schema"`
}

type CreateModelRequest struct {
	PathParams CreateModelPathParams
	Headers    CreateModelHeaders
	Request    CreateModelRequestBody `request:"mediaType=application/json"`
}

type CreateModelResponse struct {
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
