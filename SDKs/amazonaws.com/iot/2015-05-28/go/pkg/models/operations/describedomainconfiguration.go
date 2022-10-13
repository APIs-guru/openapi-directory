package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDomainConfigurationPathParams struct {
	DomainConfigurationName string `pathParam:"style=simple,explode=false,name=domainConfigurationName"`
}

type DescribeDomainConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDomainConfigurationRequest struct {
	PathParams DescribeDomainConfigurationPathParams
	Headers    DescribeDomainConfigurationHeaders
}

type DescribeDomainConfigurationResponse struct {
	ContentType                         string
	DescribeDomainConfigurationResponse *shared.DescribeDomainConfigurationResponse
	InternalFailureException            *interface{}
	InvalidRequestException             *interface{}
	ResourceNotFoundException           *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
	UnauthorizedException               *interface{}
}
