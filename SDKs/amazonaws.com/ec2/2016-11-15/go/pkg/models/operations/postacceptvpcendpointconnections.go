package operations

type PostAcceptVpcEndpointConnectionsActionEnum string

const (
	PostAcceptVpcEndpointConnectionsActionEnumAcceptVpcEndpointConnections PostAcceptVpcEndpointConnectionsActionEnum = "AcceptVpcEndpointConnections"
)

type PostAcceptVpcEndpointConnectionsVersionEnum string

const (
	PostAcceptVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 PostAcceptVpcEndpointConnectionsVersionEnum = "2016-11-15"
)

type PostAcceptVpcEndpointConnectionsQueryParams struct {
	Action  PostAcceptVpcEndpointConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAcceptVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAcceptVpcEndpointConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAcceptVpcEndpointConnectionsRequest struct {
	QueryParams PostAcceptVpcEndpointConnectionsQueryParams
	Headers     PostAcceptVpcEndpointConnectionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAcceptVpcEndpointConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
