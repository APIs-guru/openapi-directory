package operations

type GetAcceptVpcEndpointConnectionsActionEnum string

const (
	GetAcceptVpcEndpointConnectionsActionEnumAcceptVpcEndpointConnections GetAcceptVpcEndpointConnectionsActionEnum = "AcceptVpcEndpointConnections"
)

type GetAcceptVpcEndpointConnectionsVersionEnum string

const (
	GetAcceptVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 GetAcceptVpcEndpointConnectionsVersionEnum = "2016-11-15"
)

type GetAcceptVpcEndpointConnectionsQueryParams struct {
	Action        GetAcceptVpcEndpointConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun        *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	ServiceID     string                                     `queryParam:"style=form,explode=true,name=ServiceId"`
	Version       GetAcceptVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcEndpointID []string                                   `queryParam:"style=form,explode=true,name=VpcEndpointId"`
}

type GetAcceptVpcEndpointConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAcceptVpcEndpointConnectionsRequest struct {
	QueryParams GetAcceptVpcEndpointConnectionsQueryParams
	Headers     GetAcceptVpcEndpointConnectionsHeaders
}

type GetAcceptVpcEndpointConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
