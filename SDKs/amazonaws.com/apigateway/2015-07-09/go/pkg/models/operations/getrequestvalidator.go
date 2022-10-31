package operations

import (
	"openapi/pkg/models/shared"
)

type GetRequestValidatorPathParams struct {
	RequestvalidatorID string `pathParam:"style=simple,explode=false,name=requestvalidator_id"`
	RestapiID          string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetRequestValidatorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRequestValidatorRequest struct {
	PathParams GetRequestValidatorPathParams
	Headers    GetRequestValidatorHeaders
}

type GetRequestValidatorResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	RequestValidator         *shared.RequestValidator
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
