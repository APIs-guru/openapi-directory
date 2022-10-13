package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCertificatePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type DescribeCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCertificateRequest struct {
	PathParams DescribeCertificatePathParams
	Headers    DescribeCertificateHeaders
}

type DescribeCertificateResponse struct {
	ContentType                 string
	DescribeCertificateResponse *shared.DescribeCertificateResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
