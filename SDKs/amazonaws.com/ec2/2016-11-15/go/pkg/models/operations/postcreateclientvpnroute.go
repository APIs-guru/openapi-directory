package operations

type PostCreateClientVpnRouteActionEnum string

const (
	PostCreateClientVpnRouteActionEnumCreateClientVpnRoute PostCreateClientVpnRouteActionEnum = "CreateClientVpnRoute"
)

type PostCreateClientVpnRouteVersionEnum string

const (
	PostCreateClientVpnRouteVersionEnumTwoThousandAndSixteen1115 PostCreateClientVpnRouteVersionEnum = "2016-11-15"
)

type PostCreateClientVpnRouteQueryParams struct {
	Action  PostCreateClientVpnRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateClientVpnRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateClientVpnRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateClientVpnRouteRequest struct {
	QueryParams PostCreateClientVpnRouteQueryParams
	Headers     PostCreateClientVpnRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateClientVpnRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
