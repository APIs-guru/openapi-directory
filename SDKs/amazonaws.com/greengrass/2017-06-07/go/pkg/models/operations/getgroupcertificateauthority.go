package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupCertificateAuthorityPathParams struct {
	CertificateAuthorityID string `pathParam:"style=simple,explode=false,name=CertificateAuthorityId"`
	GroupID                string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type GetGroupCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGroupCertificateAuthorityRequest struct {
	PathParams GetGroupCertificateAuthorityPathParams
	Headers    GetGroupCertificateAuthorityHeaders
}

type GetGroupCertificateAuthorityResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	GetGroupCertificateAuthorityResponse *shared.GetGroupCertificateAuthorityResponse
	InternalServerErrorException         *interface{}
	StatusCode                           int64
}
