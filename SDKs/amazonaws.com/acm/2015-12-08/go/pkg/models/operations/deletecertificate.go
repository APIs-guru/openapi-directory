package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCertificateXAmzTargetEnum string

const (
	DeleteCertificateXAmzTargetEnumCertificateManagerDeleteCertificate DeleteCertificateXAmzTargetEnum = "CertificateManager.DeleteCertificate"
)

type DeleteCertificateHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCertificateRequest struct {
	Headers DeleteCertificateHeaders
	Request shared.DeleteCertificateRequest `request:"mediaType=application/json"`
}

type DeleteCertificateResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
