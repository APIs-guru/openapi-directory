package operations

type GetDeleteTransitGatewayRouteTableActionEnum string

const (
	GetDeleteTransitGatewayRouteTableActionEnumDeleteTransitGatewayRouteTable GetDeleteTransitGatewayRouteTableActionEnum = "DeleteTransitGatewayRouteTable"
)

type GetDeleteTransitGatewayRouteTableVersionEnum string

const (
	GetDeleteTransitGatewayRouteTableVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayRouteTableVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayRouteTableQueryParams struct {
	Action                     GetDeleteTransitGatewayRouteTableActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                        `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayRouteTableID string                                       `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetDeleteTransitGatewayRouteTableVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayRouteTableHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayRouteTableRequest struct {
	QueryParams GetDeleteTransitGatewayRouteTableQueryParams
	Headers     GetDeleteTransitGatewayRouteTableHeaders
}

type GetDeleteTransitGatewayRouteTableResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
