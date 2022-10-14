package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainConfigurationPathParams struct {
	DomainConfigurationName string `pathParam:"style=simple,explode=false,name=domainConfigurationName"`
}

type CreateDomainConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDomainConfigurationRequestBodyAuthorizerConfig struct {
	AllowAuthorizerOverride *bool   `json:"allowAuthorizerOverride,omitempty"`
	DefaultAuthorizerName   *string `json:"defaultAuthorizerName,omitempty"`
}

type CreateDomainConfigurationRequestBodyServiceTypeEnum string

const (
	CreateDomainConfigurationRequestBodyServiceTypeEnumData               CreateDomainConfigurationRequestBodyServiceTypeEnum = "DATA"
	CreateDomainConfigurationRequestBodyServiceTypeEnumCredentialProvider CreateDomainConfigurationRequestBodyServiceTypeEnum = "CREDENTIAL_PROVIDER"
	CreateDomainConfigurationRequestBodyServiceTypeEnumJobs               CreateDomainConfigurationRequestBodyServiceTypeEnum = "JOBS"
)

type CreateDomainConfigurationRequestBody struct {
	AuthorizerConfig         *CreateDomainConfigurationRequestBodyAuthorizerConfig `json:"authorizerConfig,omitempty"`
	DomainName               *string                                               `json:"domainName,omitempty"`
	ServerCertificateArns    []string                                              `json:"serverCertificateArns,omitempty"`
	ServiceType              *CreateDomainConfigurationRequestBodyServiceTypeEnum  `json:"serviceType,omitempty"`
	Tags                     []shared.Tag                                          `json:"tags,omitempty"`
	ValidationCertificateArn *string                                               `json:"validationCertificateArn,omitempty"`
}

type CreateDomainConfigurationRequest struct {
	PathParams CreateDomainConfigurationPathParams
	Headers    CreateDomainConfigurationHeaders
	Request    CreateDomainConfigurationRequestBody `request:"mediaType=application/json"`
}

type CreateDomainConfigurationResponse struct {
	CertificateValidationException    *interface{}
	ContentType                       string
	CreateDomainConfigurationResponse *shared.CreateDomainConfigurationResponse
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	LimitExceededException            *interface{}
	ResourceAlreadyExistsException    *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedException             *interface{}
}
