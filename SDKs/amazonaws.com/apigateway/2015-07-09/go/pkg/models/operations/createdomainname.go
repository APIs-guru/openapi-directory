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

type CreateDomainNameRequestBodyEndpointConfiguration struct {
	Types          []shared.EndpointTypeEnum `json:"types"`
	VpcEndpointIds []string                  `json:"vpcEndpointIds"`
}

type CreateDomainNameRequestBodyMutualTLSAuthentication struct {
	TruststoreURI     *string `json:"truststoreUri"`
	TruststoreVersion *string `json:"truststoreVersion"`
}

type CreateDomainNameRequestBodySecurityPolicyEnum string

const (
	CreateDomainNameRequestBodySecurityPolicyEnumTls10 CreateDomainNameRequestBodySecurityPolicyEnum = "TLS_1_0"
	CreateDomainNameRequestBodySecurityPolicyEnumTls12 CreateDomainNameRequestBodySecurityPolicyEnum = "TLS_1_2"
)

type CreateDomainNameRequestBody struct {
	CertificateArn                      *string                                             `json:"certificateArn"`
	CertificateBody                     *string                                             `json:"certificateBody"`
	CertificateChain                    *string                                             `json:"certificateChain"`
	CertificateName                     *string                                             `json:"certificateName"`
	CertificatePrivateKey               *string                                             `json:"certificatePrivateKey"`
	DomainName                          string                                              `json:"domainName"`
	EndpointConfiguration               *CreateDomainNameRequestBodyEndpointConfiguration   `json:"endpointConfiguration"`
	MutualTLSAuthentication             *CreateDomainNameRequestBodyMutualTLSAuthentication `json:"mutualTlsAuthentication"`
	OwnershipVerificationCertificateArn *string                                             `json:"ownershipVerificationCertificateArn"`
	RegionalCertificateArn              *string                                             `json:"regionalCertificateArn"`
	RegionalCertificateName             *string                                             `json:"regionalCertificateName"`
	SecurityPolicy                      *CreateDomainNameRequestBodySecurityPolicyEnum      `json:"securityPolicy"`
	Tags                                map[string]string                                   `json:"tags"`
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
