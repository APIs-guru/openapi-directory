package operations

type PostReplaceTransitGatewayRouteActionEnum string

const (
	PostReplaceTransitGatewayRouteActionEnumReplaceTransitGatewayRoute PostReplaceTransitGatewayRouteActionEnum = "ReplaceTransitGatewayRoute"
)

type PostReplaceTransitGatewayRouteVersionEnum string

const (
	PostReplaceTransitGatewayRouteVersionEnumTwoThousandAndSixteen1115 PostReplaceTransitGatewayRouteVersionEnum = "2016-11-15"
)

type PostReplaceTransitGatewayRouteQueryParams struct {
	Action  PostReplaceTransitGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReplaceTransitGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReplaceTransitGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReplaceTransitGatewayRouteRequest struct {
	QueryParams PostReplaceTransitGatewayRouteQueryParams
	Headers     PostReplaceTransitGatewayRouteHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReplaceTransitGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
