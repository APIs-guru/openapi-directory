package operations

import (
	"openapi/pkg/models/shared"
)

type TransferCertificatePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type TransferCertificateQueryParams struct {
	TargetAwsAccount string `queryParam:"style=form,explode=true,name=targetAwsAccount"`
}

type TransferCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type TransferCertificateRequestBody struct {
	TransferMessage *string `json:"transferMessage"`
}

type TransferCertificateRequest struct {
	PathParams  TransferCertificatePathParams
	QueryParams TransferCertificateQueryParams
	Headers     TransferCertificateHeaders
	Request     TransferCertificateRequestBody `request:"mediaType=application/json"`
}

type TransferCertificateResponse struct {
	CertificateStateException   *interface{}
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	TransferCertificateResponse *shared.TransferCertificateResponse
	TransferConflictException   *interface{}
	UnauthorizedException       *interface{}
}
