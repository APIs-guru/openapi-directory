package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainNameHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDomainNameRequestBodyMutualTLSAuthentication struct {
	TruststoreURI     *string `json:"TruststoreUri"`
	TruststoreVersion *string `json:"TruststoreVersion"`
}

type CreateDomainNameRequestBody struct {
	DomainName               string                                              `json:"domainName"`
	DomainNameConfigurations []shared.DomainNameConfiguration                    `json:"domainNameConfigurations"`
	MutualTLSAuthentication  *CreateDomainNameRequestBodyMutualTLSAuthentication `json:"mutualTlsAuthentication"`
	Tags                     map[string]string                                   `json:"tags"`
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
