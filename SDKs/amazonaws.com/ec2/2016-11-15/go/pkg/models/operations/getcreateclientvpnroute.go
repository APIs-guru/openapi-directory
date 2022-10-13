package operations

type GetCreateClientVpnRouteActionEnum string

const (
	GetCreateClientVpnRouteActionEnumCreateClientVpnRoute GetCreateClientVpnRouteActionEnum = "CreateClientVpnRoute"
)

type GetCreateClientVpnRouteVersionEnum string

const (
	GetCreateClientVpnRouteVersionEnumTwoThousandAndSixteen1115 GetCreateClientVpnRouteVersionEnum = "2016-11-15"
)

type GetCreateClientVpnRouteQueryParams struct {
	Action               GetCreateClientVpnRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientToken          *string                            `queryParam:"style=form,explode=true,name=ClientToken"`
	ClientVpnEndpointID  string                             `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	Description          *string                            `queryParam:"style=form,explode=true,name=Description"`
	DestinationCidrBlock string                             `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DryRun               *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	TargetVpcSubnetID    string                             `queryParam:"style=form,explode=true,name=TargetVpcSubnetId"`
	Version              GetCreateClientVpnRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateClientVpnRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateClientVpnRouteRequest struct {
	QueryParams GetCreateClientVpnRouteQueryParams
	Headers     GetCreateClientVpnRouteHeaders
}

type GetCreateClientVpnRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
