package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDomainConfigurationPathParams struct {
	DomainConfigurationName string `pathParam:"style=simple,explode=false,name=domainConfigurationName"`
}

type DescribeDomainConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
