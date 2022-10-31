package operations

type GetDeleteVpcEndpointServiceConfigurationsActionEnum string

const (
	GetDeleteVpcEndpointServiceConfigurationsActionEnumDeleteVpcEndpointServiceConfigurations GetDeleteVpcEndpointServiceConfigurationsActionEnum = "DeleteVpcEndpointServiceConfigurations"
)

type GetDeleteVpcEndpointServiceConfigurationsVersionEnum string

const (
	GetDeleteVpcEndpointServiceConfigurationsVersionEnumTwoThousandAndSixteen1115 GetDeleteVpcEndpointServiceConfigurationsVersionEnum = "2016-11-15"
)

type GetDeleteVpcEndpointServiceConfigurationsQueryParams struct {
	Action    GetDeleteVpcEndpointServiceConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun    *bool                                                `queryParam:"style=form,explode=true,name=DryRun"`
	ServiceID []string                                             `queryParam:"style=form,explode=true,name=ServiceId"`
	Version   GetDeleteVpcEndpointServiceConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteVpcEndpointServiceConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteVpcEndpointServiceConfigurationsRequest struct {
	QueryParams GetDeleteVpcEndpointServiceConfigurationsQueryParams
	Headers     GetDeleteVpcEndpointServiceConfigurationsHeaders
}

type GetDeleteVpcEndpointServiceConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
