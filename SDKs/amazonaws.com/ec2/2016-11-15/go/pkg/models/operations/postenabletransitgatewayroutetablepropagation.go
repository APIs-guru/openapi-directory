package operations

type PostEnableTransitGatewayRouteTablePropagationActionEnum string

const (
	PostEnableTransitGatewayRouteTablePropagationActionEnumEnableTransitGatewayRouteTablePropagation PostEnableTransitGatewayRouteTablePropagationActionEnum = "EnableTransitGatewayRouteTablePropagation"
)

type PostEnableTransitGatewayRouteTablePropagationVersionEnum string

const (
	PostEnableTransitGatewayRouteTablePropagationVersionEnumTwoThousandAndSixteen1115 PostEnableTransitGatewayRouteTablePropagationVersionEnum = "2016-11-15"
)

type PostEnableTransitGatewayRouteTablePropagationQueryParams struct {
	Action  PostEnableTransitGatewayRouteTablePropagationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableTransitGatewayRouteTablePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableTransitGatewayRouteTablePropagationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableTransitGatewayRouteTablePropagationRequest struct {
	QueryParams PostEnableTransitGatewayRouteTablePropagationQueryParams
	Headers     PostEnableTransitGatewayRouteTablePropagationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableTransitGatewayRouteTablePropagationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
