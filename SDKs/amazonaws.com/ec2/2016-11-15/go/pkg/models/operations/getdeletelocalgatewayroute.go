package operations

type GetDeleteLocalGatewayRouteActionEnum string

const (
	GetDeleteLocalGatewayRouteActionEnumDeleteLocalGatewayRoute GetDeleteLocalGatewayRouteActionEnum = "DeleteLocalGatewayRoute"
)

type GetDeleteLocalGatewayRouteVersionEnum string

const (
	GetDeleteLocalGatewayRouteVersionEnumTwoThousandAndSixteen1115 GetDeleteLocalGatewayRouteVersionEnum = "2016-11-15"
)

type GetDeleteLocalGatewayRouteQueryParams struct {
	Action                   GetDeleteLocalGatewayRouteActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DestinationCidrBlock     string                                `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
	DryRun                   *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	LocalGatewayRouteTableID string                                `queryParam:"style=form,explode=true,name=LocalGatewayRouteTableId"`
	Version                  GetDeleteLocalGatewayRouteVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLocalGatewayRouteHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteLocalGatewayRouteRequest struct {
	QueryParams GetDeleteLocalGatewayRouteQueryParams
	Headers     GetDeleteLocalGatewayRouteHeaders
}

type GetDeleteLocalGatewayRouteResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
