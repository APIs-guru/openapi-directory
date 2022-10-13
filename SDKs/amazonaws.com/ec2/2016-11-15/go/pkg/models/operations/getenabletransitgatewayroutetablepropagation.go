package operations

type GetEnableTransitGatewayRouteTablePropagationActionEnum string

const (
	GetEnableTransitGatewayRouteTablePropagationActionEnumEnableTransitGatewayRouteTablePropagation GetEnableTransitGatewayRouteTablePropagationActionEnum = "EnableTransitGatewayRouteTablePropagation"
)

type GetEnableTransitGatewayRouteTablePropagationVersionEnum string

const (
	GetEnableTransitGatewayRouteTablePropagationVersionEnumTwoThousandAndSixteen1115 GetEnableTransitGatewayRouteTablePropagationVersionEnum = "2016-11-15"
)

type GetEnableTransitGatewayRouteTablePropagationQueryParams struct {
	Action                     GetEnableTransitGatewayRouteTablePropagationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                                   `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                                  `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                                  `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetEnableTransitGatewayRouteTablePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableTransitGatewayRouteTablePropagationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableTransitGatewayRouteTablePropagationRequest struct {
	QueryParams GetEnableTransitGatewayRouteTablePropagationQueryParams
	Headers     GetEnableTransitGatewayRouteTablePropagationHeaders
}

type GetEnableTransitGatewayRouteTablePropagationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
