package operations

type GetDeleteVpnConnectionRouteActionEnum string

const (
	GetDeleteVpnConnectionRouteActionEnumDeleteVpnConnectionRoute GetDeleteVpnConnectionRouteActionEnum = "DeleteVpnConnectionRoute"
)

type GetDeleteVpnConnectionRouteVersionEnum string

const (
	GetDeleteVpnConnectionRouteVersionEnumTwoThousandAndSixteen1115 GetDeleteVpnConnectionRouteVersionEnum = "2016-11-15"
)

type GetDeleteVpnConnectionRouteQueryParams struct {
	Action               GetDeleteVpnConnectionRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DestinationCidrBlock string                                 `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	Version              GetDeleteVpnConnectionRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnConnectionID      string                                 `queryParam:"style=form,explode=true,name=VpnConnectionId"`
}

type GetDeleteVpnConnectionRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpnConnectionRouteRequest struct {
	QueryParams GetDeleteVpnConnectionRouteQueryParams
	Headers     GetDeleteVpnConnectionRouteHeaders
}

type GetDeleteVpnConnectionRouteResponse struct {
	ContentType string
	StatusCode  int64
}
