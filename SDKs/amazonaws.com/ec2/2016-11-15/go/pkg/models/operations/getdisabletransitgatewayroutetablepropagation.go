package operations

type GetDisableTransitGatewayRouteTablePropagationActionEnum string

const (
	GetDisableTransitGatewayRouteTablePropagationActionEnumDisableTransitGatewayRouteTablePropagation GetDisableTransitGatewayRouteTablePropagationActionEnum = "DisableTransitGatewayRouteTablePropagation"
)

type GetDisableTransitGatewayRouteTablePropagationVersionEnum string

const (
	GetDisableTransitGatewayRouteTablePropagationVersionEnumTwoThousandAndSixteen1115 GetDisableTransitGatewayRouteTablePropagationVersionEnum = "2016-11-15"
)

type GetDisableTransitGatewayRouteTablePropagationQueryParams struct {
	Action                     GetDisableTransitGatewayRouteTablePropagationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                                    `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                                   `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                                   `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetDisableTransitGatewayRouteTablePropagationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableTransitGatewayRouteTablePropagationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableTransitGatewayRouteTablePropagationRequest struct {
	QueryParams GetDisableTransitGatewayRouteTablePropagationQueryParams
	Headers     GetDisableTransitGatewayRouteTablePropagationHeaders
}

type GetDisableTransitGatewayRouteTablePropagationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
