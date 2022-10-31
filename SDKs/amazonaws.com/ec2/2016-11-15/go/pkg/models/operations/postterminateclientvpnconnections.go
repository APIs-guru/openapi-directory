package operations

type PostTerminateClientVpnConnectionsActionEnum string

const (
	PostTerminateClientVpnConnectionsActionEnumTerminateClientVpnConnections PostTerminateClientVpnConnectionsActionEnum = "TerminateClientVpnConnections"
)

type PostTerminateClientVpnConnectionsVersionEnum string

const (
	PostTerminateClientVpnConnectionsVersionEnumTwoThousandAndSixteen1115 PostTerminateClientVpnConnectionsVersionEnum = "2016-11-15"
)

type PostTerminateClientVpnConnectionsQueryParams struct {
	Action  PostTerminateClientVpnConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostTerminateClientVpnConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostTerminateClientVpnConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostTerminateClientVpnConnectionsRequest struct {
	QueryParams PostTerminateClientVpnConnectionsQueryParams
	Headers     PostTerminateClientVpnConnectionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostTerminateClientVpnConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
