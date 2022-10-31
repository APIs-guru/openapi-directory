package operations

type GetAssociateTransitGatewayRouteTableActionEnum string

const (
	GetAssociateTransitGatewayRouteTableActionEnumAssociateTransitGatewayRouteTable GetAssociateTransitGatewayRouteTableActionEnum = "AssociateTransitGatewayRouteTable"
)

type GetAssociateTransitGatewayRouteTableVersionEnum string

const (
	GetAssociateTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 GetAssociateTransitGatewayRouteTableVersionEnum = "2016-11-15"
)

type GetAssociateTransitGatewayRouteTableQueryParams struct {
	Action                     GetAssociateTransitGatewayRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                           `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                          `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                          `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetAssociateTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAssociateTransitGatewayRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAssociateTransitGatewayRouteTableRequest struct {
	QueryParams GetAssociateTransitGatewayRouteTableQueryParams
	Headers     GetAssociateTransitGatewayRouteTableHeaders
}

type GetAssociateTransitGatewayRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
