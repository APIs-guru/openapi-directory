package operations

type GetModifyVpcEndpointServiceConfigurationActionEnum string

const (
	GetModifyVpcEndpointServiceConfigurationActionEnumModifyVpcEndpointServiceConfiguration GetModifyVpcEndpointServiceConfigurationActionEnum = "ModifyVpcEndpointServiceConfiguration"
)

type GetModifyVpcEndpointServiceConfigurationVersionEnum string

const (
	GetModifyVpcEndpointServiceConfigurationVersionEnumTwoThousandAndSixteen1115 GetModifyVpcEndpointServiceConfigurationVersionEnum = "2016-11-15"
)

type GetModifyVpcEndpointServiceConfigurationQueryParams struct {
	AcceptanceRequired           *bool                                               `queryParam:"style=form,explode=true,name=AcceptanceRequired"`
	Action                       GetModifyVpcEndpointServiceConfigurationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AddGatewayLoadBalancerArn    []string                                            `queryParam:"style=form,explode=true,name=AddGatewayLoadBalancerArn"`
	AddNetworkLoadBalancerArn    []string                                            `queryParam:"style=form,explode=true,name=AddNetworkLoadBalancerArn"`
	DryRun                       *bool                                               `queryParam:"style=form,explode=true,name=DryRun"`
	PrivateDNSName               *string                                             `queryParam:"style=form,explode=true,name=PrivateDnsName"`
	RemoveGatewayLoadBalancerArn []string                                            `queryParam:"style=form,explode=true,name=RemoveGatewayLoadBalancerArn"`
	RemoveNetworkLoadBalancerArn []string                                            `queryParam:"style=form,explode=true,name=RemoveNetworkLoadBalancerArn"`
	RemovePrivateDNSName         *bool                                               `queryParam:"style=form,explode=true,name=RemovePrivateDnsName"`
	ServiceID                    string                                              `queryParam:"style=form,explode=true,name=ServiceId"`
	Version                      GetModifyVpcEndpointServiceConfigurationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyVpcEndpointServiceConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyVpcEndpointServiceConfigurationRequest struct {
	QueryParams GetModifyVpcEndpointServiceConfigurationQueryParams
	Headers     GetModifyVpcEndpointServiceConfigurationHeaders
}

type GetModifyVpcEndpointServiceConfigurationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
