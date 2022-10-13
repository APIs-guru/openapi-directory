package operations

import (
	"openapi/pkg/models/shared"
)

type GetBasePathMappingPathParams struct {
	BasePath   string `pathParam:"style=simple,explode=false,name=base_path"`
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type GetBasePathMappingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBasePathMappingRequest struct {
	PathParams GetBasePathMappingPathParams
	Headers    GetBasePathMappingHeaders
}

type GetBasePathMappingResponse struct {
	BadRequestException      *interface{}
	BasePathMapping          *shared.BasePathMapping
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
