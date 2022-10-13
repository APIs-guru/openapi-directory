package operations

type GetReplaceTransitGatewayRouteActionEnum string

const (
	GetReplaceTransitGatewayRouteActionEnumReplaceTransitGatewayRoute GetReplaceTransitGatewayRouteActionEnum = "ReplaceTransitGatewayRoute"
)

type GetReplaceTransitGatewayRouteVersionEnum string

const (
	GetReplaceTransitGatewayRouteVersionEnumTwoThousandAndSixteen1115 GetReplaceTransitGatewayRouteVersionEnum = "2016-11-15"
)

type GetReplaceTransitGatewayRouteQueryParams struct {
	Action                     GetReplaceTransitGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Blackhole                  *bool                                    `queryParam:"style=form,explode=true,name=Blackhole"`
	DestinationCidrBlock       string                                   `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DryRun                     *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID *string                                  `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	TransitGatewayRouteTableID string                                   `queryParam:"style=form,explode=true,name=TransitGatewayRouteTableId"`
	Version                    GetReplaceTransitGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetReplaceTransitGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetReplaceTransitGatewayRouteRequest struct {
	QueryParams GetReplaceTransitGatewayRouteQueryParams
	Headers     GetReplaceTransitGatewayRouteHeaders
}

type GetReplaceTransitGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
