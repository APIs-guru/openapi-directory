package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCertificateXAmzTargetEnum string

const (
	DescribeCertificateXAmzTargetEnumCertificateManagerDescribeCertificate DescribeCertificateXAmzTargetEnum = "CertificateManager.DescribeCertificate"
)

type DescribeCertificateHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCertificateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCertificateRequest struct {
	Headers DescribeCertificateHeaders
	Request shared.DescribeCertificateRequest `request:"mediaType=application/json"`
}

type DescribeCertificateResponse struct {
	ContentType                 string
	DescribeCertificateResponse *shared.DescribeCertificateResponse
	InvalidArnException         *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
