package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRequestValidatorPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateRequestValidatorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRequestValidatorRequestBody struct {
	Name                      *string `json:"name,omitempty"`
	ValidateRequestBody       *bool   `json:"validateRequestBody,omitempty"`
	ValidateRequestParameters *bool   `json:"validateRequestParameters,omitempty"`
}

type CreateRequestValidatorRequest struct {
	PathParams CreateRequestValidatorPathParams
	Headers    CreateRequestValidatorHeaders
	Request    CreateRequestValidatorRequestBody `request:"mediaType=application/json"`
}

type CreateRequestValidatorResponse struct {
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
