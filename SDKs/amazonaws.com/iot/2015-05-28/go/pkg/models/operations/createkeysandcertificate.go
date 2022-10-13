package operations

import (
	"openapi/pkg/models/shared"
)

type CreateKeysAndCertificateQueryParams struct {
	SetAsActive *bool `queryParam:"style=form,explode=true,name=setAsActive"`
}

type CreateKeysAndCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateKeysAndCertificateRequest struct {
	QueryParams CreateKeysAndCertificateQueryParams
	Headers     CreateKeysAndCertificateHeaders
}

type CreateKeysAndCertificateResponse struct {
	ContentType                      string
	CreateKeysAndCertificateResponse *shared.CreateKeysAndCertificateResponse
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UnauthorizedException            *interface{}
}
