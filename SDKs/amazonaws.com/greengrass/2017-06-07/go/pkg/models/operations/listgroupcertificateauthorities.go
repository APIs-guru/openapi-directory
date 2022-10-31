package operations

import (
	"openapi/pkg/models/shared"
)

type ListGroupCertificateAuthoritiesPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type ListGroupCertificateAuthoritiesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListGroupCertificateAuthoritiesRequest struct {
	PathParams ListGroupCertificateAuthoritiesPathParams
	Headers    ListGroupCertificateAuthoritiesHeaders
}

type ListGroupCertificateAuthoritiesResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	InternalServerErrorException            *interface{}
	ListGroupCertificateAuthoritiesResponse *shared.ListGroupCertificateAuthoritiesResponse
	StatusCode                              int64
}
