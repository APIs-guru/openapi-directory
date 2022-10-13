package operations

import (
	"openapi/pkg/models/shared"
)

type ResendValidationEmailXAmzTargetEnum string

const (
	ResendValidationEmailXAmzTargetEnumCertificateManagerResendValidationEmail ResendValidationEmailXAmzTargetEnum = "CertificateManager.ResendValidationEmail"
)

type ResendValidationEmailHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResendValidationEmailXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResendValidationEmailRequest struct {
	Headers ResendValidationEmailHeaders
	Request shared.ResendValidationEmailRequest `request:"mediaType=application/json"`
}

type ResendValidationEmailResponse struct {
	ContentType                             string
	InvalidArnException                     *interface{}
	InvalidDomainValidationOptionsException *interface{}
	InvalidStateException                   *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
}
