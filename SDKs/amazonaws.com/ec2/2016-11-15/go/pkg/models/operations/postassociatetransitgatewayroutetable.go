package operations

type PostAssociateTransitGatewayRouteTableActionEnum string

const (
	PostAssociateTransitGatewayRouteTableActionEnumAssociateTransitGatewayRouteTable PostAssociateTransitGatewayRouteTableActionEnum = "AssociateTransitGatewayRouteTable"
)

type PostAssociateTransitGatewayRouteTableVersionEnum string

const (
	PostAssociateTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 PostAssociateTransitGatewayRouteTableVersionEnum = "2016-11-15"
)

type PostAssociateTransitGatewayRouteTableQueryParams struct {
	Action  PostAssociateTransitGatewayRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAssociateTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAssociateTransitGatewayRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAssociateTransitGatewayRouteTableRequest struct {
	QueryParams PostAssociateTransitGatewayRouteTableQueryParams
	Headers     PostAssociateTransitGatewayRouteTableHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAssociateTransitGatewayRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
