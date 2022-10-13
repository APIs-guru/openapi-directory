package operations

import (
	"openapi/pkg/models/shared"
)

type ListDomainConfigurationsServiceTypeEnum string

const (
	ListDomainConfigurationsServiceTypeEnumData               ListDomainConfigurationsServiceTypeEnum = "DATA"
	ListDomainConfigurationsServiceTypeEnumCredentialProvider ListDomainConfigurationsServiceTypeEnum = "CREDENTIAL_PROVIDER"
	ListDomainConfigurationsServiceTypeEnumJobs               ListDomainConfigurationsServiceTypeEnum = "JOBS"
)

type ListDomainConfigurationsQueryParams struct {
	Marker      *string                                  `queryParam:"style=form,explode=true,name=marker"`
	PageSize    *int64                                   `queryParam:"style=form,explode=true,name=pageSize"`
	ServiceType *ListDomainConfigurationsServiceTypeEnum `queryParam:"style=form,explode=true,name=serviceType"`
}

type ListDomainConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDomainConfigurationsRequest struct {
	QueryParams ListDomainConfigurationsQueryParams
	Headers     ListDomainConfigurationsHeaders
}

type ListDomainConfigurationsResponse struct {
	ContentType                      string
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ListDomainConfigurationsResponse *shared.ListDomainConfigurationsResponse
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
	UnauthorizedException            *interface{}
}
