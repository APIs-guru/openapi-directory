package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificateXAmzTargetEnum string

const (
	GetCertificateXAmzTargetEnumAcmPrivateCaGetCertificate GetCertificateXAmzTargetEnum = "ACMPrivateCA.GetCertificate"
)

type GetCertificateHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCertificateRequest struct {
	Headers GetCertificateHeaders
	Request shared.GetCertificateRequest `request:"mediaType=application/json"`
}

type GetCertificateResponse struct {
	ContentType                string
	GetCertificateResponse     *shared.GetCertificateResponse
	InvalidArnException        *interface{}
	InvalidStateException      *interface{}
	RequestFailedException     *interface{}
	RequestInProgressException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
