package operations

import (
	"openapi/pkg/models/shared"
)

type ListSecurityConfigurationsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListSecurityConfigurationsXAmzTargetEnum string

const (
	ListSecurityConfigurationsXAmzTargetEnumElasticMapReduceListSecurityConfigurations ListSecurityConfigurationsXAmzTargetEnum = "ElasticMapReduce.ListSecurityConfigurations"
)

type ListSecurityConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecurityConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSecurityConfigurationsRequest struct {
	QueryParams ListSecurityConfigurationsQueryParams
	Headers     ListSecurityConfigurationsHeaders
	Request     shared.ListSecurityConfigurationsInput `request:"mediaType=application/json"`
}

type ListSecurityConfigurationsResponse struct {
	ContentType                      string
	InternalServerException          *interface{}
	InvalidRequestException          *interface{}
	ListSecurityConfigurationsOutput *shared.ListSecurityConfigurationsOutput
	StatusCode                       int64
}
