package operations

type GetDeleteCarrierGatewayActionEnum string

const (
	GetDeleteCarrierGatewayActionEnumDeleteCarrierGateway GetDeleteCarrierGatewayActionEnum = "DeleteCarrierGateway"
)

type GetDeleteCarrierGatewayVersionEnum string

const (
	GetDeleteCarrierGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteCarrierGatewayVersionEnum = "2016-11-15"
)

type GetDeleteCarrierGatewayQueryParams struct {
	Action           GetDeleteCarrierGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CarrierGatewayID string                             `queryParam:"style=form,explode=true,name=CarrierGatewayId"`
	DryRun           *bool                              `queryParam:"style=form,explode=true,name=DryRun"`
	Version          GetDeleteCarrierGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteCarrierGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteCarrierGatewayRequest struct {
	QueryParams GetDeleteCarrierGatewayQueryParams
	Headers     GetDeleteCarrierGatewayHeaders
}

type GetDeleteCarrierGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
