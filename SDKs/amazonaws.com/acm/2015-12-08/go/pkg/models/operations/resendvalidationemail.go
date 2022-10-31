package operations

import (
	"openapi/pkg/models/shared"
)

type ResendValidationEmailXAmzTargetEnum string

const (
	ResendValidationEmailXAmzTargetEnumCertificateManagerResendValidationEmail ResendValidationEmailXAmzTargetEnum = "CertificateManager.ResendValidationEmail"
)

type ResendValidationEmailHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ResendValidationEmailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
