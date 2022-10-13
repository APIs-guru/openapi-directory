package operations

import (
	"openapi/pkg/models/shared"
)

type GetBasePathMappingsPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type GetBasePathMappingsQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetBasePathMappingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBasePathMappingsRequest struct {
	PathParams  GetBasePathMappingsPathParams
	QueryParams GetBasePathMappingsQueryParams
	Headers     GetBasePathMappingsHeaders
}

type GetBasePathMappingsResponse struct {
	BadRequestException      *interface{}
	BasePathMappings         *shared.BasePathMappings
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
