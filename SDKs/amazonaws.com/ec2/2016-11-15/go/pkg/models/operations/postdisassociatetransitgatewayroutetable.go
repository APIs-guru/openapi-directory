package operations

type PostDisassociateTransitGatewayRouteTableActionEnum string

const (
	PostDisassociateTransitGatewayRouteTableActionEnumDisassociateTransitGatewayRouteTable PostDisassociateTransitGatewayRouteTableActionEnum = "DisassociateTransitGatewayRouteTable"
)

type PostDisassociateTransitGatewayRouteTableVersionEnum string

const (
	PostDisassociateTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 PostDisassociateTransitGatewayRouteTableVersionEnum = "2016-11-15"
)

type PostDisassociateTransitGatewayRouteTableQueryParams struct {
	Action  PostDisassociateTransitGatewayRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisassociateTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisassociateTransitGatewayRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisassociateTransitGatewayRouteTableRequest struct {
	QueryParams PostDisassociateTransitGatewayRouteTableQueryParams
	Headers     PostDisassociateTransitGatewayRouteTableHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisassociateTransitGatewayRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
