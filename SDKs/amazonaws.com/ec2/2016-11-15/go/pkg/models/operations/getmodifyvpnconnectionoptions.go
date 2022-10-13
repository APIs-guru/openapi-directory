package operations

type GetModifyVpnConnectionOptionsActionEnum string

const (
	GetModifyVpnConnectionOptionsActionEnumModifyVpnConnectionOptions GetModifyVpnConnectionOptionsActionEnum = "ModifyVpnConnectionOptions"
)

type GetModifyVpnConnectionOptionsVersionEnum string

const (
	GetModifyVpnConnectionOptionsVersionEnumTwoThousandAndSixteen1115 GetModifyVpnConnectionOptionsVersionEnum = "2016-11-15"
)

type GetModifyVpnConnectionOptionsQueryParams struct {
	Action                GetModifyVpnConnectionOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	LocalIpv4NetworkCidr  *string                                  `queryParam:"style=form,explode=true,name=LocalIpv4NetworkCidr"`
	LocalIpv6NetworkCidr  *string                                  `queryParam:"style=form,explode=true,name=LocalIpv6NetworkCidr"`
	RemoteIpv4NetworkCidr *string                                  `queryParam:"style=form,explode=true,name=RemoteIpv4NetworkCidr"`
	RemoteIpv6NetworkCidr *string                                  `queryParam:"style=form,explode=true,name=RemoteIpv6NetworkCidr"`
	Version               GetModifyVpnConnectionOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnConnectionID       string                                   `queryParam:"style=form,explode=true,name=VpnConnectionId"`
}

type GetModifyVpnConnectionOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyVpnConnectionOptionsRequest struct {
	QueryParams GetModifyVpnConnectionOptionsQueryParams
	Headers     GetModifyVpnConnectionOptionsHeaders
}

type GetModifyVpnConnectionOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
