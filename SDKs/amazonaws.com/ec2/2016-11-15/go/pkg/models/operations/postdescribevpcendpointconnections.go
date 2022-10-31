package operations

type PostDescribeVpcEndpointConnectionsActionEnum string

const (
	PostDescribeVpcEndpointConnectionsActionEnumDescribeVpcEndpointConnections PostDescribeVpcEndpointConnectionsActionEnum = "DescribeVpcEndpointConnections"
)

type PostDescribeVpcEndpointConnectionsVersionEnum string

const (
	PostDescribeVpcEndpointConnectionsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcEndpointConnectionsVersionEnum = "2016-11-15"
)

type PostDescribeVpcEndpointConnectionsQueryParams struct {
	Action     PostDescribeVpcEndpointConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                       `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcEndpointConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcEndpointConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcEndpointConnectionsRequest struct {
	QueryParams PostDescribeVpcEndpointConnectionsQueryParams
	Headers     PostDescribeVpcEndpointConnectionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcEndpointConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
