package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupCertificateAuthorityPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type CreateGroupCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmznClientToken  *string `header:"name=X-Amzn-Client-Token"`
}

type CreateGroupCertificateAuthorityRequest struct {
	PathParams CreateGroupCertificateAuthorityPathParams
	Headers    CreateGroupCertificateAuthorityHeaders
}

type CreateGroupCertificateAuthorityResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	CreateGroupCertificateAuthorityResponse *shared.CreateGroupCertificateAuthorityResponse
	InternalServerErrorException            *interface{}
	StatusCode                              int64
}
