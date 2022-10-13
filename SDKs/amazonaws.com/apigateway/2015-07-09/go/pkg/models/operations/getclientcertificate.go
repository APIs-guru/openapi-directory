package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientCertificatePathParams struct {
	ClientcertificateID string `pathParam:"style=simple,explode=false,name=clientcertificate_id"`
}

type GetClientCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetClientCertificateRequest struct {
	PathParams GetClientCertificatePathParams
	Headers    GetClientCertificateHeaders
}

type GetClientCertificateResponse struct {
	BadRequestException      *interface{}
	ClientCertificate        *shared.ClientCertificate
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
