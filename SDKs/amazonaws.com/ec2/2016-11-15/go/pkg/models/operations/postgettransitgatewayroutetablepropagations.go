package operations

type PostGetTransitGatewayRouteTablePropagationsActionEnum string

const (
	PostGetTransitGatewayRouteTablePropagationsActionEnumGetTransitGatewayRouteTablePropagations PostGetTransitGatewayRouteTablePropagationsActionEnum = "GetTransitGatewayRouteTablePropagations"
)

type PostGetTransitGatewayRouteTablePropagationsVersionEnum string

const (
	PostGetTransitGatewayRouteTablePropagationsVersionEnumTwoThousandAndSixteen1115 PostGetTransitGatewayRouteTablePropagationsVersionEnum = "2016-11-15"
)

type PostGetTransitGatewayRouteTablePropagationsQueryParams struct {
	Action     PostGetTransitGatewayRouteTablePropagationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                                `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostGetTransitGatewayRouteTablePropagationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetTransitGatewayRouteTablePropagationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetTransitGatewayRouteTablePropagationsRequest struct {
	QueryParams PostGetTransitGatewayRouteTablePropagationsQueryParams
	Headers     PostGetTransitGatewayRouteTablePropagationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetTransitGatewayRouteTablePropagationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
