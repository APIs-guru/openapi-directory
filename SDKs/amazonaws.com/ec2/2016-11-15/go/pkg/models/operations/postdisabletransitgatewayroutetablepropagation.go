package operations

type PostDisableTransitGatewayRouteTablePropagationActionEnum string

const (
	PostDisableTransitGatewayRouteTablePropagationActionEnumDisableTransitGatewayRouteTablePropagation PostDisableTransitGatewayRouteTablePropagationActionEnum = "DisableTransitGatewayRouteTablePropagation"
)

type PostDisableTransitGatewayRouteTablePropagationVersionEnum string

const (
	PostDisableTransitGatewayRouteTablePropagationVersionEnumTwoThousandAndSixteen1115 PostDisableTransitGatewayRouteTablePropagationVersionEnum = "2016-11-15"
)

type PostDisableTransitGatewayRouteTablePropagationQueryParams struct {
	Action  PostDisableTransitGatewayRouteTablePropagationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableTransitGatewayRouteTablePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableTransitGatewayRouteTablePropagationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDisableTransitGatewayRouteTablePropagationRequest struct {
	QueryParams PostDisableTransitGatewayRouteTablePropagationQueryParams
	Headers     PostDisableTransitGatewayRouteTablePropagationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableTransitGatewayRouteTablePropagationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
