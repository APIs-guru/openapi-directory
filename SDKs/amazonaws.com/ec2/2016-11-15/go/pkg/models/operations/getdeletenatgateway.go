package operations

type GetDeleteNatGatewayActionEnum string

const (
	GetDeleteNatGatewayActionEnumDeleteNatGateway GetDeleteNatGatewayActionEnum = "DeleteNatGateway"
)

type GetDeleteNatGatewayVersionEnum string

const (
	GetDeleteNatGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteNatGatewayVersionEnum = "2016-11-15"
)

type GetDeleteNatGatewayQueryParams struct {
	Action       GetDeleteNatGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	NatGatewayID string                         `queryParam:"style=form,explode=true,name=NatGatewayId"`
	Version      GetDeleteNatGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteNatGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteNatGatewayRequest struct {
	QueryParams GetDeleteNatGatewayQueryParams
	Headers     GetDeleteNatGatewayHeaders
}

type GetDeleteNatGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
