package operations

type GetTerminateClientVpnConnectionsActionEnum string

const (
	GetTerminateClientVpnConnectionsActionEnumTerminateClientVpnConnections GetTerminateClientVpnConnectionsActionEnum = "TerminateClientVpnConnections"
)

type GetTerminateClientVpnConnectionsVersionEnum string

const (
	GetTerminateClientVpnConnectionsVersionEnumTwoThousandAndSixteen1115 GetTerminateClientVpnConnectionsVersionEnum = "2016-11-15"
)

type GetTerminateClientVpnConnectionsQueryParams struct {
	Action              GetTerminateClientVpnConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClientVpnEndpointID string                                      `queryParam:"style=form,explode=true,name=ClientVpnEndpointId"`
	ConnectionID        *string                                     `queryParam:"style=form,explode=true,name=ConnectionId"`
	DryRun              *bool                                       `queryParam:"style=form,explode=true,name=DryRun"`
	Username            *string                                     `queryParam:"style=form,explode=true,name=Username"`
	Version             GetTerminateClientVpnConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTerminateClientVpnConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTerminateClientVpnConnectionsRequest struct {
	QueryParams GetTerminateClientVpnConnectionsQueryParams
	Headers     GetTerminateClientVpnConnectionsHeaders
}

type GetTerminateClientVpnConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
