package operations

type PostCreateLocalGatewayRouteActionEnum string

const (
	PostCreateLocalGatewayRouteActionEnumCreateLocalGatewayRoute PostCreateLocalGatewayRouteActionEnum = "CreateLocalGatewayRoute"
)

type PostCreateLocalGatewayRouteVersionEnum string

const (
	PostCreateLocalGatewayRouteVersionEnumTwoThousandAndSixteen1115 PostCreateLocalGatewayRouteVersionEnum = "2016-11-15"
)

type PostCreateLocalGatewayRouteQueryParams struct {
	Action  PostCreateLocalGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateLocalGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateLocalGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateLocalGatewayRouteRequest struct {
	QueryParams PostCreateLocalGatewayRouteQueryParams
	Headers     PostCreateLocalGatewayRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateLocalGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
