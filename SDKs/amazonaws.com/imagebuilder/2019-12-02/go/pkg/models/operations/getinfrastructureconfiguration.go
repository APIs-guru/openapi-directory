package operations

import (
	"openapi/pkg/models/shared"
)

type GetInfrastructureConfigurationQueryParams struct {
	InfrastructureConfigurationArn string `queryParam:"style=form,explode=true,name=infrastructureConfigurationArn"`
}

type GetInfrastructureConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInfrastructureConfigurationRequest struct {
	QueryParams GetInfrastructureConfigurationQueryParams
	Headers     GetInfrastructureConfigurationHeaders
}

type GetInfrastructureConfigurationResponse struct {
	CallRateLimitExceededException         *interface{}
	ClientException                        *interface{}
	ContentType                            string
	ForbiddenException                     *interface{}
	GetInfrastructureConfigurationResponse *shared.GetInfrastructureConfigurationResponse
	InvalidRequestException                *interface{}
	ServiceException                       *interface{}
	ServiceUnavailableException            *interface{}
	StatusCode                             int64
}
