package operations

type GetModifyVpnTunnelCertificateActionEnum string

const (
	GetModifyVpnTunnelCertificateActionEnumModifyVpnTunnelCertificate GetModifyVpnTunnelCertificateActionEnum = "ModifyVpnTunnelCertificate"
)

type GetModifyVpnTunnelCertificateVersionEnum string

const (
	GetModifyVpnTunnelCertificateVersionEnumTwoThousandAndSixteen1115 GetModifyVpnTunnelCertificateVersionEnum = "2016-11-15"
)

type GetModifyVpnTunnelCertificateQueryParams struct {
	Action                    GetModifyVpnTunnelCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                    *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	Version                   GetModifyVpnTunnelCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnConnectionID           string                                   `queryParam:"style=form,explode=true,name=VpnConnectionId"`
	VpnTunnelOutsideIPAddress string                                   `queryParam:"style=form,explode=true,name=VpnTunnelOutsideIpAddress"`
}

type GetModifyVpnTunnelCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyVpnTunnelCertificateRequest struct {
	QueryParams GetModifyVpnTunnelCertificateQueryParams
	Headers     GetModifyVpnTunnelCertificateHeaders
}

type GetModifyVpnTunnelCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
