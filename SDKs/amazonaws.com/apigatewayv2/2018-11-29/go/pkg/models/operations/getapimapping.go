package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIMappingPathParams struct {
	APIMappingID string `pathParam:"style=simple,explode=false,name=apiMappingId"`
	DomainName   string `pathParam:"style=simple,explode=false,name=domainName"`
}

type GetAPIMappingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAPIMappingRequest struct {
	PathParams GetAPIMappingPathParams
	Headers    GetAPIMappingHeaders
}

type GetAPIMappingResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetAPIMappingResponse    *shared.GetAPIMappingResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
