package operations

type GetDisassociateTransitGatewayRouteTableActionEnum string

const (
	GetDisassociateTransitGatewayRouteTableActionEnumDisassociateTransitGatewayRouteTable GetDisassociateTransitGatewayRouteTableActionEnum = "DisassociateTransitGatewayRouteTable"
)

type GetDisassociateTransitGatewayRouteTableVersionEnum string

const (
	GetDisassociateTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 GetDisassociateTransitGatewayRouteTableVersionEnum = "2016-11-15"
)

type GetDisassociateTransitGatewayRouteTableQueryParams struct {
	Action                     GetDisassociateTransitGatewayRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                              `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                             `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                             `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetDisassociateTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisassociateTransitGatewayRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisassociateTransitGatewayRouteTableRequest struct {
	QueryParams GetDisassociateTransitGatewayRouteTableQueryParams
	Headers     GetDisassociateTransitGatewayRouteTableHeaders
}

type GetDisassociateTransitGatewayRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
