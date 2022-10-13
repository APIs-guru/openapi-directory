package operations

type GetDeleteVpnGatewayActionEnum string

const (
	GetDeleteVpnGatewayActionEnumDeleteVpnGateway GetDeleteVpnGatewayActionEnum = "DeleteVpnGateway"
)

type GetDeleteVpnGatewayVersionEnum string

const (
	GetDeleteVpnGatewayVersionEnumTwoThousandAndSixteen1115 GetDeleteVpnGatewayVersionEnum = "2016-11-15"
)

type GetDeleteVpnGatewayQueryParams struct {
	Action       GetDeleteVpnGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	Version      GetDeleteVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnGatewayID string                         `queryParam:"style=form,explode=true,name=VpnGatewayId"`
}

type GetDeleteVpnGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpnGatewayRequest struct {
	QueryParams GetDeleteVpnGatewayQueryParams
	Headers     GetDeleteVpnGatewayHeaders
}

type GetDeleteVpnGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
