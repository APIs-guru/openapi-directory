package operations

type PostDeleteVpnConnectionRouteActionEnum string

const (
	PostDeleteVpnConnectionRouteActionEnumDeleteVpnConnectionRoute PostDeleteVpnConnectionRouteActionEnum = "DeleteVpnConnectionRoute"
)

type PostDeleteVpnConnectionRouteVersionEnum string

const (
	PostDeleteVpnConnectionRouteVersionEnumTwoThousandAndSixteen1115 PostDeleteVpnConnectionRouteVersionEnum = "2016-11-15"
)

type PostDeleteVpnConnectionRouteQueryParams struct {
	Action  PostDeleteVpnConnectionRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteVpnConnectionRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteVpnConnectionRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteVpnConnectionRouteRequest struct {
	QueryParams PostDeleteVpnConnectionRouteQueryParams
	Headers     PostDeleteVpnConnectionRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteVpnConnectionRouteResponse struct {
	ContentType string
	StatusCode  int64
}
