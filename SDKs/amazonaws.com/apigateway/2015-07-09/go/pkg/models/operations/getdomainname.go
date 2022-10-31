package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainNamePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type GetDomainNameHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDomainNameRequest struct {
	PathParams GetDomainNamePathParams
	Headers    GetDomainNameHeaders
}

type GetDomainNameResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DomainName               *shared.DomainName
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
