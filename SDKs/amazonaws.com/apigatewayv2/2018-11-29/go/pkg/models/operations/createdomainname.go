package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainNameHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateDomainNameRequestBodyMutualTLSAuthentication struct {
	TruststoreURI     *string `json:"TruststoreUri,omitempty"`
	TruststoreVersion *string `json:"TruststoreVersion,omitempty"`
}

type CreateDomainNameRequestBody struct {
	DomainName               string                                              `json:"domainName"`
	DomainNameConfigurations []shared.DomainNameConfiguration                    `json:"domainNameConfigurations,omitempty"`
	MutualTLSAuthentication  *CreateDomainNameRequestBodyMutualTLSAuthentication `json:"mutualTlsAuthentication,omitempty"`
	Tags                     map[string]string                                   `json:"tags,omitempty"`
}

type CreateDomainNameRequest struct {
	Headers CreateDomainNameHeaders
	Request CreateDomainNameRequestBody `request:"mediaType=application/json"`
}

type CreateDomainNameResponse struct {
	AccessDeniedException    *interface{}
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateDomainNameResponse *shared.CreateDomainNameResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
