package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCaCertificatePathParams struct {
	CaCertificateID string `pathParam:"style=simple,explode=false,name=caCertificateId"`
}

type DescribeCaCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCaCertificateRequest struct {
	PathParams DescribeCaCertificatePathParams
	Headers    DescribeCaCertificateHeaders
}

type DescribeCaCertificateResponse struct {
	ContentType                   string
	DescribeCaCertificateResponse *shared.DescribeCaCertificateResponse
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnauthorizedException         *interface{}
}
