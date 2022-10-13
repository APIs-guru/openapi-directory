package operations

import (
	"openapi/pkg/models/shared"
)

type GetRequestValidatorsPathParams struct {
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetRequestValidatorsQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetRequestValidatorsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRequestValidatorsRequest struct {
	PathParams  GetRequestValidatorsPathParams
	QueryParams GetRequestValidatorsQueryParams
	Headers     GetRequestValidatorsHeaders
}

type GetRequestValidatorsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	RequestValidators        *shared.RequestValidators
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
