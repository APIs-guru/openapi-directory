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

// CreateDomainNameRequestBodyEndpointConfiguration
// The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has.
type CreateDomainNameRequestBodyEndpointConfiguration struct {
	Types          []shared.EndpointTypeEnum `json:"types,omitempty"`
	VpcEndpointIds []string                  `json:"vpcEndpointIds,omitempty"`
}

// CreateDomainNameRequestBodyMutualTLSAuthentication
// If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
type CreateDomainNameRequestBodyMutualTLSAuthentication struct {
	TruststoreURI     *string `json:"truststoreUri,omitempty"`
	TruststoreVersion *string `json:"truststoreVersion,omitempty"`
}

type CreateDomainNameRequestBodySecurityPolicyEnum string

const (
	CreateDomainNameRequestBodySecurityPolicyEnumTls10 CreateDomainNameRequestBodySecurityPolicyEnum = "TLS_1_0"
	CreateDomainNameRequestBodySecurityPolicyEnumTls12 CreateDomainNameRequestBodySecurityPolicyEnum = "TLS_1_2"
)

type CreateDomainNameRequestBody struct {
	CertificateArn                      *string                                             `json:"certificateArn,omitempty"`
	CertificateBody                     *string                                             `json:"certificateBody,omitempty"`
	CertificateChain                    *string                                             `json:"certificateChain,omitempty"`
	CertificateName                     *string                                             `json:"certificateName,omitempty"`
	CertificatePrivateKey               *string                                             `json:"certificatePrivateKey,omitempty"`
	DomainName                          string                                              `json:"domainName"`
	EndpointConfiguration               *CreateDomainNameRequestBodyEndpointConfiguration   `json:"endpointConfiguration,omitempty"`
	MutualTLSAuthentication             *CreateDomainNameRequestBodyMutualTLSAuthentication `json:"mutualTlsAuthentication,omitempty"`
	OwnershipVerificationCertificateArn *string                                             `json:"ownershipVerificationCertificateArn,omitempty"`
	RegionalCertificateArn              *string                                             `json:"regionalCertificateArn,omitempty"`
	RegionalCertificateName             *string                                             `json:"regionalCertificateName,omitempty"`
	SecurityPolicy                      *CreateDomainNameRequestBodySecurityPolicyEnum      `json:"securityPolicy,omitempty"`
	Tags                                map[string]string                                   `json:"tags,omitempty"`
}

type CreateDomainNameRequest struct {
	Headers CreateDomainNameHeaders
	Request CreateDomainNameRequestBody `request:"mediaType=application/json"`
}

type CreateDomainNameResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	DomainName               *shared.DomainName
	LimitExceededException   *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
