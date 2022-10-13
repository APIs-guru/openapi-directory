package operations

type GetModifyVpnConnectionActionEnum string

const (
	GetModifyVpnConnectionActionEnumModifyVpnConnection GetModifyVpnConnectionActionEnum = "ModifyVpnConnection"
)

type GetModifyVpnConnectionVersionEnum string

const (
	GetModifyVpnConnectionVersionEnumTwoThousandAndSixteen1115 GetModifyVpnConnectionVersionEnum = "2016-11-15"
)

type GetModifyVpnConnectionQueryParams struct {
	Action            GetModifyVpnConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CustomerGatewayID *string                           `queryParam:"style=form,explode=true,name=CustomerGatewayId"`
	DryRun            *bool                             `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayID  *string                           `queryParam:"style=form,explode=true,name=TransitGatewayId"`
	Version           GetModifyVpnConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnConnectionID   string                            `queryParam:"style=form,explode=true,name=VpnConnectionId"`
	VpnGatewayID      *string                           `queryParam:"style=form,explode=true,name=VpnGatewayId"`
}

type GetModifyVpnConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyVpnConnectionRequest struct {
	QueryParams GetModifyVpnConnectionQueryParams
	Headers     GetModifyVpnConnectionHeaders
}

type GetModifyVpnConnectionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
