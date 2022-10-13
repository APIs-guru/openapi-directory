package operations

type PostGetTransitGatewayRouteTableAssociationsActionEnum string

const (
	PostGetTransitGatewayRouteTableAssociationsActionEnumGetTransitGatewayRouteTableAssociations PostGetTransitGatewayRouteTableAssociationsActionEnum = "GetTransitGatewayRouteTableAssociations"
)

type PostGetTransitGatewayRouteTableAssociationsVersionEnum string

const (
	PostGetTransitGatewayRouteTableAssociationsVersionEnumTwoThousandAndSixteen1115 PostGetTransitGatewayRouteTableAssociationsVersionEnum = "2016-11-15"
)

type PostGetTransitGatewayRouteTableAssociationsQueryParams struct {
	Action     PostGetTransitGatewayRouteTableAssociationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                                `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostGetTransitGatewayRouteTableAssociationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetTransitGatewayRouteTableAssociationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetTransitGatewayRouteTableAssociationsRequest struct {
	QueryParams PostGetTransitGatewayRouteTableAssociationsQueryParams
	Headers     PostGetTransitGatewayRouteTableAssociationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetTransitGatewayRouteTableAssociationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
