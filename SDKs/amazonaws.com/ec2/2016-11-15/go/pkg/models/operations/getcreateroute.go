package operations

type GetCreateRouteActionEnum string

const (
	GetCreateRouteActionEnumCreateRoute GetCreateRouteActionEnum = "CreateRoute"
)

type GetCreateRouteVersionEnum string

const (
	GetCreateRouteVersionEnumTwoThousandAndSixteen1115 GetCreateRouteVersionEnum = "2016-11-15"
)

type GetCreateRouteQueryParams struct {
	Action                      GetCreateRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CarrierGatewayID            *string                   `queryParam:"style=form,explode=true,name=CarrierGatewayId"`
	DestinationCidrBlock        *string                   `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DestinationIpv6CidrBlock    *string                   `queryParam:"style=form,explode=true,name=DestinationIpv6CidrBlock"`
	DestinationPrefixListID     *string                   `queryParam:"style=form,explode=true,name=DestinationPrefixListId"`
	DryRun                      *bool                     `queryParam:"style=form,explode=true,name=DryRun"`
	EgressOnlyInternetGatewayID *string                   `queryParam:"style=form,explode=true,name=EgressOnlyInternetGatewayId"`
	GatewayID                   *string                   `queryParam:"style=form,explode=true,name=GatewayId"`
	InstanceID                  *string                   `queryParam:"style=form,explode=true,name=InstanceId"`
	LocalGatewayID              *string                   `queryParam:"style=form,explode=true,name=LocalGatewayId"`
	NatGatewayID                *string                   `queryParam:"style=form,explode=true,name=NatGatewayId"`
	NetworkInterfaceID          *string                   `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	RouteTableID                string                    `queryParam:"style=form,explode=true,name=RouteTableId"`
	TransitGatewayID            *string                   `queryParam:"style=form,explode=true,name=TransitGatewayId"`
	Version                     GetCreateRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcEndpointID               *string                   `queryParam:"style=form,explode=true,name=VpcEndpointId"`
	VpcPeeringConnectionID      *string                   `queryParam:"style=form,explode=true,name=VpcPeeringConnectionId"`
}

type GetCreateRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateRouteRequest struct {
	QueryParams GetCreateRouteQueryParams
	Headers     GetCreateRouteHeaders
}

type GetCreateRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
