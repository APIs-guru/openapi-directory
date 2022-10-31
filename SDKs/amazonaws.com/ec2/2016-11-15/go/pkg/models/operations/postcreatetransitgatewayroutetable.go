package operations

type PostCreateTransitGatewayRouteTableActionEnum string

const (
	PostCreateTransitGatewayRouteTableActionEnumCreateTransitGatewayRouteTable PostCreateTransitGatewayRouteTableActionEnum = "CreateTransitGatewayRouteTable"
)

type PostCreateTransitGatewayRouteTableVersionEnum string

const (
	PostCreateTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayRouteTableVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayRouteTableQueryParams struct {
	Action  PostCreateTransitGatewayRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayRouteTableRequest struct {
	QueryParams PostCreateTransitGatewayRouteTableQueryParams
	Headers     PostCreateTransitGatewayRouteTableHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
