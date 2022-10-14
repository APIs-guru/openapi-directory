package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBasePathMappingPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type CreateBasePathMappingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBasePathMappingRequestBody struct {
	BasePath  *string `json:"basePath,omitempty"`
	RestAPIID string  `json:"restApiId"`
	Stage     *string `json:"stage,omitempty"`
}

type CreateBasePathMappingRequest struct {
	PathParams CreateBasePathMappingPathParams
	Headers    CreateBasePathMappingHeaders
	Request    CreateBasePathMappingRequestBody `request:"mediaType=application/json"`
}

type CreateBasePathMappingResponse struct {
	BadRequestException      *interface{}
	BasePathMapping          *shared.BasePathMapping
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
