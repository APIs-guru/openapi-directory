package operations

import (
	"openapi/pkg/models/shared"
)

type RenewCertificateXAmzTargetEnum string

const (
	RenewCertificateXAmzTargetEnumCertificateManagerRenewCertificate RenewCertificateXAmzTargetEnum = "CertificateManager.RenewCertificate"
)

type RenewCertificateHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RenewCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RenewCertificateRequest struct {
	Headers RenewCertificateHeaders
	Request shared.RenewCertificateRequest `request:"mediaType=application/json"`
}

type RenewCertificateResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
