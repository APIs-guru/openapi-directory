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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
