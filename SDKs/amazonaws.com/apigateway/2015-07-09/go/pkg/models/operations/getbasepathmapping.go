package operations

import (
	"openapi/pkg/models/shared"
)

type GetBasePathMappingPathParams struct {
	BasePath   string `pathParam:"style=simple,explode=false,name=base_path"`
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type GetBasePathMappingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
