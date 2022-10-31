package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificateXAmzTargetEnum string

const (
	GetCertificateXAmzTargetEnumCertificateManagerGetCertificate GetCertificateXAmzTargetEnum = "CertificateManager.GetCertificate"
)

type GetCertificateHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCertificateRequest struct {
	Headers GetCertificateHeaders
	Request shared.GetCertificateRequest `request:"mediaType=application/json"`
}

type GetCertificateResponse struct {
	ContentType                string
	GetCertificateResponse     *shared.GetCertificateResponse
	InvalidArnException        *interface{}
	RequestInProgressException *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
