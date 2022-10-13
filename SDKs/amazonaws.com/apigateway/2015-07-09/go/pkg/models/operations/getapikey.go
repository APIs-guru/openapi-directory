package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIKeyPathParams struct {
	APIKey string `pathParam:"style=simple,explode=false,name=api_Key"`
}

type GetAPIKeyQueryParams struct {
	IncludeValue *bool `queryParam:"style=form,explode=true,name=includeValue"`
}

type GetAPIKeyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAPIKeyRequest struct {
	PathParams  GetAPIKeyPathParams
	QueryParams GetAPIKeyQueryParams
	Headers     GetAPIKeyHeaders
}

type GetAPIKeyResponse struct {
	APIKey                   *shared.APIKey
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
