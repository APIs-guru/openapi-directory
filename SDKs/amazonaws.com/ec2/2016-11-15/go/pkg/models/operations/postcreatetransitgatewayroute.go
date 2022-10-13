package operations

type PostCreateTransitGatewayRouteActionEnum string

const (
	PostCreateTransitGatewayRouteActionEnumCreateTransitGatewayRoute PostCreateTransitGatewayRouteActionEnum = "CreateTransitGatewayRoute"
)

type PostCreateTransitGatewayRouteVersionEnum string

const (
	PostCreateTransitGatewayRouteVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayRouteVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayRouteQueryParams struct {
	Action  PostCreateTransitGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayRouteRequest struct {
	QueryParams PostCreateTransitGatewayRouteQueryParams
	Headers     PostCreateTransitGatewayRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
