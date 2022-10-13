package operations

type GetAttachVpnGatewayActionEnum string

const (
	GetAttachVpnGatewayActionEnumAttachVpnGateway GetAttachVpnGatewayActionEnum = "AttachVpnGateway"
)

type GetAttachVpnGatewayVersionEnum string

const (
	GetAttachVpnGatewayVersionEnumTwoThousandAndSixteen1115 GetAttachVpnGatewayVersionEnum = "2016-11-15"
)

type GetAttachVpnGatewayQueryParams struct {
	Action       GetAttachVpnGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun       *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	Version      GetAttachVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID        string                         `queryParam:"style=form,explode=true,name=VpcId"`
	VpnGatewayID string                         `queryParam:"style=form,explode=true,name=VpnGatewayId"`
}

type GetAttachVpnGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAttachVpnGatewayRequest struct {
	QueryParams GetAttachVpnGatewayQueryParams
	Headers     GetAttachVpnGatewayHeaders
}

type GetAttachVpnGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
