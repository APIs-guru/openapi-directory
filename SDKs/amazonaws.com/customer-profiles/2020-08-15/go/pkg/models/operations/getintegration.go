package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type GetIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetIntegrationRequestBody struct {
	URI string `json:"Uri"`
}

type GetIntegrationRequest struct {
	PathParams GetIntegrationPathParams
	Headers    GetIntegrationHeaders
	Request    GetIntegrationRequestBody `request:"mediaType=application/json"`
}

type GetIntegrationResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	GetIntegrationResponse    *shared.GetIntegrationResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
