package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainNamePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type UpdateDomainNameHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateDomainNameRequestBodyMutualTLSAuthentication
// The mutual TLS authentication configuration for a custom domain name.
type UpdateDomainNameRequestBodyMutualTLSAuthentication struct {
	TruststoreURI     *string `json:"TruststoreUri,omitempty"`
	TruststoreVersion *string `json:"TruststoreVersion,omitempty"`
}

type UpdateDomainNameRequestBody struct {
	DomainNameConfigurations []shared.DomainNameConfiguration                    `json:"domainNameConfigurations,omitempty"`
	MutualTLSAuthentication  *UpdateDomainNameRequestBodyMutualTLSAuthentication `json:"mutualTlsAuthentication,omitempty"`
}

type UpdateDomainNameRequest struct {
	PathParams UpdateDomainNamePathParams
	Headers    UpdateDomainNameHeaders
	Request    UpdateDomainNameRequestBody `request:"mediaType=application/json"`
}

type UpdateDomainNameResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateDomainNameResponse *shared.UpdateDomainNameResponse
}
