package operations

type GetRejectVpcEndpointConnectionsActionEnum string

const (
	GetRejectVpcEndpointConnectionsActionEnumRejectVpcEndpointConnections GetRejectVpcEndpointConnectionsActionEnum = "RejectVpcEndpointConnections"
)

type GetRejectVpcEndpointConnectionsVersionEnum string

const (
	GetRejectVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 GetRejectVpcEndpointConnectionsVersionEnum = "2016-11-15"
)

type GetRejectVpcEndpointConnectionsQueryParams struct {
	Action        GetRejectVpcEndpointConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun        *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	ServiceID     string                                     `queryParam:"style=form,explode=true,name=ServiceId"`
	Version       GetRejectVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcEndpointID []string                                   `queryParam:"style=form,explode=true,name=VpcEndpointId"`
}

type GetRejectVpcEndpointConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRejectVpcEndpointConnectionsRequest struct {
	QueryParams GetRejectVpcEndpointConnectionsQueryParams
	Headers     GetRejectVpcEndpointConnectionsHeaders
}

type GetRejectVpcEndpointConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
