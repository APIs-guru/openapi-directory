package operations

type GetCreateTransitGatewayRouteActionEnum string

const (
	GetCreateTransitGatewayRouteActionEnumCreateTransitGatewayRoute GetCreateTransitGatewayRouteActionEnum = "CreateTransitGatewayRoute"
)

type GetCreateTransitGatewayRouteVersionEnum string

const (
	GetCreateTransitGatewayRouteVersionEnumTwoThousandAndSixteen1115 GetCreateTransitGatewayRouteVersionEnum = "2016-11-15"
)

type GetCreateTransitGatewayRouteQueryParams struct {
	Action                     GetCreateTransitGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Blackhole                  *bool                                   `queryParam:"style=form,explode=true,name=Blackhole"`
	DestinationCidrBlock       string                                  `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DryRun                     *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID *string                                 `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                  `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetCreateTransitGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateTransitGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateTransitGatewayRouteRequest struct {
	QueryParams GetCreateTransitGatewayRouteQueryParams
	Headers     GetCreateTransitGatewayRouteHeaders
}

type GetCreateTransitGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
