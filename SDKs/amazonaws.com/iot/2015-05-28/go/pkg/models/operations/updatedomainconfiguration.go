package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainConfigurationPathParams struct {
	DomainConfigurationName string `pathParam:"style=simple,explode=false,name=domainConfigurationName"`
}

type UpdateDomainConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDomainConfigurationRequestBodyAuthorizerConfig struct {
	AllowAuthorizerOverride *bool   `json:"allowAuthorizerOverride"`
	DefaultAuthorizerName   *string `json:"defaultAuthorizerName"`
}

type UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum string

const (
	UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnumEnabled  UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum = "ENABLED"
	UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnumDisabled UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum = "DISABLED"
)

type UpdateDomainConfigurationRequestBody struct {
	AuthorizerConfig          *UpdateDomainConfigurationRequestBodyAuthorizerConfig              `json:"authorizerConfig"`
	DomainConfigurationStatus *UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum `json:"domainConfigurationStatus"`
	RemoveAuthorizerConfig    *bool                                                              `json:"removeAuthorizerConfig"`
}

type UpdateDomainConfigurationRequest struct {
	PathParams UpdateDomainConfigurationPathParams
	Headers    UpdateDomainConfigurationHeaders
	Request    UpdateDomainConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateDomainConfigurationResponse struct {
	CertificateValidationException    *interface{}
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	ServiceUnavailableException       *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UnauthorizedException             *interface{}
	UpdateDomainConfigurationResponse *shared.UpdateDomainConfigurationResponse
}
