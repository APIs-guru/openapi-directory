package operations

type GetDeleteTransitGatewayActionEnum string

const (
	GetDeleteTransitGatewayActionEnumDeleteTransitGateway GetDeleteTransitGatewayActionEnum = "DeleteTransitGateway"
)

type GetDeleteTransitGatewayVersionEnum string

const (
	GetDeleteTransitGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayQueryParams struct {
	Action           GetDeleteTransitGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun           *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayID string                             `queryParam:"style=form,explode=true,name=TransitGatewayId"`
	Version          GetDeleteTransitGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayRequest struct {
	QueryParams GetDeleteTransitGatewayQueryParams
	Headers     GetDeleteTransitGatewayHeaders
}

type GetDeleteTransitGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
