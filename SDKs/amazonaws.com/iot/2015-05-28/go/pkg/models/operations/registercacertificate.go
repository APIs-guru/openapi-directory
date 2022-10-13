package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterCaCertificateQueryParams struct {
	AllowAutoRegistration *bool `queryParam:"style=form,explode=true,name=allowAutoRegistration"`
	SetAsActive           *bool `queryParam:"style=form,explode=true,name=setAsActive"`
}

type RegisterCaCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterCaCertificateRequestBodyRegistrationConfig struct {
	RoleArn      *string `json:"roleArn"`
	TemplateBody *string `json:"templateBody"`
}

type RegisterCaCertificateRequestBody struct {
	CaCertificate           string                                              `json:"caCertificate"`
	RegistrationConfig      *RegisterCaCertificateRequestBodyRegistrationConfig `json:"registrationConfig"`
	Tags                    []shared.Tag                                        `json:"tags"`
	VerificationCertificate string                                              `json:"verificationCertificate"`
}

type RegisterCaCertificateRequest struct {
	QueryParams RegisterCaCertificateQueryParams
	Headers     RegisterCaCertificateHeaders
	Request     RegisterCaCertificateRequestBody `request:"mediaType=application/json"`
}

type RegisterCaCertificateResponse struct {
	CertificateValidationException      *interface{}
	ContentType                         string
	InternalFailureException            *interface{}
	InvalidRequestException             *interface{}
	LimitExceededException              *interface{}
	RegisterCaCertificateResponse       *shared.RegisterCaCertificateResponse
	RegistrationCodeValidationException *interface{}
	ResourceAlreadyExistsException      *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	UnauthorizedException               *interface{}
}
