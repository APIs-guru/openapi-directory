package operations

type PostDeleteClientVpnRouteActionEnum string

const (
	PostDeleteClientVpnRouteActionEnumDeleteClientVpnRoute PostDeleteClientVpnRouteActionEnum = "DeleteClientVpnRoute"
)

type PostDeleteClientVpnRouteVersionEnum string

const (
	PostDeleteClientVpnRouteVersionEnumTwoThousandAndSixteen1115 PostDeleteClientVpnRouteVersionEnum = "2016-11-15"
)

type PostDeleteClientVpnRouteQueryParams struct {
	Action  PostDeleteClientVpnRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClientVpnRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClientVpnRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteClientVpnRouteRequest struct {
	QueryParams PostDeleteClientVpnRouteQueryParams
	Headers     PostDeleteClientVpnRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClientVpnRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
