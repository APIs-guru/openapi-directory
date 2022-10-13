package operations

type GetDeleteVpnConnectionActionEnum string

const (
	GetDeleteVpnConnectionActionEnumDeleteVpnConnection GetDeleteVpnConnectionActionEnum = "DeleteVpnConnection"
)

type GetDeleteVpnConnectionVersionEnum string

const (
	GetDeleteVpnConnectionVersionEnumTwoThousandAndSixteen1115 GetDeleteVpnConnectionVersionEnum = "2016-11-15"
)

type GetDeleteVpnConnectionQueryParams struct {
	Action          GetDeleteVpnConnectionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun          *bool                             `queryParam:"style=form,explode=true,name=DryRun"`
	Version         GetDeleteVpnConnectionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpnConnectionID string                            `queryParam:"style=form,explode=true,name=VpnConnectionId"`
}

type GetDeleteVpnConnectionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteVpnConnectionRequest struct {
	QueryParams GetDeleteVpnConnectionQueryParams
	Headers     GetDeleteVpnConnectionHeaders
}

type GetDeleteVpnConnectionResponse struct {
	ContentType string
	StatusCode  int64
}
