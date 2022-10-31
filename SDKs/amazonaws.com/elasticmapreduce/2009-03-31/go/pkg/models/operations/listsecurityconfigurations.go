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
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSecurityConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
