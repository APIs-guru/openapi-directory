package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateClientCertificatePathParams struct {
	ClientcertificateID string `pathParam:"style=simple,explode=false,name=clientcertificate_id"`
}

type UpdateClientCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateClientCertificateRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateClientCertificateRequest struct {
	PathParams UpdateClientCertificatePathParams
	Headers    UpdateClientCertificateHeaders
	Request    UpdateClientCertificateRequestBody `request:"mediaType=application/json"`
}

type UpdateClientCertificateResponse struct {
	BadRequestException      *interface{}
	ClientCertificate        *shared.ClientCertificate
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
