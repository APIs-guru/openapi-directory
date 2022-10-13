package operations

type PostCreateVpnConnectionRouteActionEnum string

const (
	PostCreateVpnConnectionRouteActionEnumCreateVpnConnectionRoute PostCreateVpnConnectionRouteActionEnum = "CreateVpnConnectionRoute"
)

type PostCreateVpnConnectionRouteVersionEnum string

const (
	PostCreateVpnConnectionRouteVersionEnumTwoThousandAndSixteen1115 PostCreateVpnConnectionRouteVersionEnum = "2016-11-15"
)

type PostCreateVpnConnectionRouteQueryParams struct {
	Action  PostCreateVpnConnectionRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpnConnectionRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpnConnectionRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateVpnConnectionRouteRequest struct {
	QueryParams PostCreateVpnConnectionRouteQueryParams
	Headers     PostCreateVpnConnectionRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpnConnectionRouteResponse struct {
	ContentType string
	StatusCode  int64
}
