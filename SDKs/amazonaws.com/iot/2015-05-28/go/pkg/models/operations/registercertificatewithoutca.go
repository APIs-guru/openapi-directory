package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterCertificateWithoutCaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RegisterCertificateWithoutCaRequestBodyStatusEnum string

const (
	RegisterCertificateWithoutCaRequestBodyStatusEnumActive            RegisterCertificateWithoutCaRequestBodyStatusEnum = "ACTIVE"
	RegisterCertificateWithoutCaRequestBodyStatusEnumInactive          RegisterCertificateWithoutCaRequestBodyStatusEnum = "INACTIVE"
	RegisterCertificateWithoutCaRequestBodyStatusEnumRevoked           RegisterCertificateWithoutCaRequestBodyStatusEnum = "REVOKED"
	RegisterCertificateWithoutCaRequestBodyStatusEnumPendingTransfer   RegisterCertificateWithoutCaRequestBodyStatusEnum = "PENDING_TRANSFER"
	RegisterCertificateWithoutCaRequestBodyStatusEnumRegisterInactive  RegisterCertificateWithoutCaRequestBodyStatusEnum = "REGISTER_INACTIVE"
	RegisterCertificateWithoutCaRequestBodyStatusEnumPendingActivation RegisterCertificateWithoutCaRequestBodyStatusEnum = "PENDING_ACTIVATION"
)

type RegisterCertificateWithoutCaRequestBody struct {
	CertificatePem string                                             `json:"certificatePem"`
	Status         *RegisterCertificateWithoutCaRequestBodyStatusEnum `json:"status,omitempty"`
}

type RegisterCertificateWithoutCaRequest struct {
	Headers RegisterCertificateWithoutCaHeaders
	Request RegisterCertificateWithoutCaRequestBody `request:"mediaType=application/json"`
}

type RegisterCertificateWithoutCaResponse struct {
	CertificateStateException            *interface{}
	CertificateValidationException       *interface{}
	ContentType                          string
	InternalFailureException             *interface{}
	InvalidRequestException              *interface{}
	RegisterCertificateWithoutCaResponse *shared.RegisterCertificateWithoutCaResponse
	ResourceAlreadyExistsException       *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
	UnauthorizedException                *interface{}
}
