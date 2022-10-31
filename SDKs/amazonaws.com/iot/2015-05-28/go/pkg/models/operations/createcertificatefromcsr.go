package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCertificateFromCsrQueryParams struct {
	SetAsActive *bool `queryParam:"style=form,explode=true,name=setAsActive"`
}

type CreateCertificateFromCsrHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateCertificateFromCsrRequestBody struct {
	CertificateSigningRequest string `json:"certificateSigningRequest"`
}

type CreateCertificateFromCsrRequest struct {
	QueryParams CreateCertificateFromCsrQueryParams
	Headers     CreateCertificateFromCsrHeaders
	Request     CreateCertificateFromCsrRequestBody `request:"mediaType=application/json"`
}

type CreateCertificateFromCsrResponse struct {
	ContentType                      string
	CreateCertificateFromCsrResponse *shared.CreateCertificateFromCsrResponse
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UnauthorizedException            *interface{}
}
