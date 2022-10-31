package operations

type PostDeleteLocalGatewayRouteActionEnum string

const (
	PostDeleteLocalGatewayRouteActionEnumDeleteLocalGatewayRoute PostDeleteLocalGatewayRouteActionEnum = "DeleteLocalGatewayRoute"
)

type PostDeleteLocalGatewayRouteVersionEnum string

const (
	PostDeleteLocalGatewayRouteVersionEnumTwoThousandAndSixteen1115 PostDeleteLocalGatewayRouteVersionEnum = "2016-11-15"
)

type PostDeleteLocalGatewayRouteQueryParams struct {
	Action  PostDeleteLocalGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLocalGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLocalGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteLocalGatewayRouteRequest struct {
	QueryParams PostDeleteLocalGatewayRouteQueryParams
	Headers     PostDeleteLocalGatewayRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLocalGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
