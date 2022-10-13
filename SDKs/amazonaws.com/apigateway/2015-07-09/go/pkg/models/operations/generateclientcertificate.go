package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateClientCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GenerateClientCertificateRequestBody struct {
	Description *string           `json:"description"`
	Tags        map[string]string `json:"tags"`
}

type GenerateClientCertificateRequest struct {
	Headers GenerateClientCertificateHeaders
	Request GenerateClientCertificateRequestBody `request:"mediaType=application/json"`
}

type GenerateClientCertificateResponse struct {
	BadRequestException      *interface{}
	ClientCertificate        *shared.ClientCertificate
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
