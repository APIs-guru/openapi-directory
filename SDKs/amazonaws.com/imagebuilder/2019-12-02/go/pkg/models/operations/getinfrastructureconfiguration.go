package operations

import (
	"openapi/pkg/models/shared"
)

type GetInfrastructureConfigurationQueryParams struct {
	InfrastructureConfigurationArn string `queryParam:"style=form,explode=true,name=infrastructureConfigurationArn"`
}

type GetInfrastructureConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
