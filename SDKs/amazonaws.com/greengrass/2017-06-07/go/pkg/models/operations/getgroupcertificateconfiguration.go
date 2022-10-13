package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupCertificateConfigurationPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
}

type GetGroupCertificateConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGroupCertificateConfigurationRequest struct {
	PathParams GetGroupCertificateConfigurationPathParams
	Headers    GetGroupCertificateConfigurationHeaders
}

type GetGroupCertificateConfigurationResponse struct {
	BadRequestException                      *interface{}
	ContentType                              string
	GetGroupCertificateConfigurationResponse *shared.GetGroupCertificateConfigurationResponse
	InternalServerErrorException             *interface{}
	StatusCode                               int64
}
