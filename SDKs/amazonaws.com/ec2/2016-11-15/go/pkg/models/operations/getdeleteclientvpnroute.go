package operations

type GetDeleteClientVpnRouteActionEnum string

const (
	GetDeleteClientVpnRouteActionEnumDeleteClientVpnRoute GetDeleteClientVpnRouteActionEnum = "DeleteClientVpnRoute"
)

type GetDeleteClientVpnRouteVersionEnum string

const (
	GetDeleteClientVpnRouteVersionEnumTwoThousandAndSixteen1115 GetDeleteClientVpnRouteVersionEnum = "2016-11-15"
)

type GetDeleteClientVpnRouteQueryParams struct {
	Action               GetDeleteClientVpnRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID  string                             `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	DestinationCidrBlock string                             `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DryRun               *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	TargetVpcSubnetID    *string                            `queryParam:"style=form,explode=true,name=TargetVpcSubnetId"`
	Version              GetDeleteClientVpnRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClientVpnRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteClientVpnRouteRequest struct {
	QueryParams GetDeleteClientVpnRouteQueryParams
	Headers     GetDeleteClientVpnRouteHeaders
}

type GetDeleteClientVpnRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
