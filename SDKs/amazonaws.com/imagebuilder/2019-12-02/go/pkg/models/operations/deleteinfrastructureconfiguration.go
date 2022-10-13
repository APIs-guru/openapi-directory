package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInfrastructureConfigurationQueryParams struct {
	InfrastructureConfigurationArn string `queryParam:"style=form,explode=true,name=infrastructureConfigurationArn"`
}

type DeleteInfrastructureConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteInfrastructureConfigurationRequest struct {
	QueryParams DeleteInfrastructureConfigurationQueryParams
	Headers     DeleteInfrastructureConfigurationHeaders
}

type DeleteInfrastructureConfigurationResponse struct {
	CallRateLimitExceededException            *interface{}
	ClientException                           *interface{}
	ContentType                               string
	DeleteInfrastructureConfigurationResponse *shared.DeleteInfrastructureConfigurationResponse
	ForbiddenException                        *interface{}
	InvalidRequestException                   *interface{}
	ResourceDependencyException               *interface{}
	ServiceException                          *interface{}
	ServiceUnavailableException               *interface{}
	StatusCode                                int64
}
