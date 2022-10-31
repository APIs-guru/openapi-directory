package operations

type PostDescribeVpcPeeringConnectionsActionEnum string

const (
	PostDescribeVpcPeeringConnectionsActionEnumDescribeVpcPeeringConnections PostDescribeVpcPeeringConnectionsActionEnum = "DescribeVpcPeeringConnections"
)

type PostDescribeVpcPeeringConnectionsVersionEnum string

const (
	PostDescribeVpcPeeringConnectionsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcPeeringConnectionsVersionEnum = "2016-11-15"
)

type PostDescribeVpcPeeringConnectionsQueryParams struct {
	Action     PostDescribeVpcPeeringConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                      `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                      `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcPeeringConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcPeeringConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcPeeringConnectionsRequest struct {
	QueryParams PostDescribeVpcPeeringConnectionsQueryParams
	Headers     PostDescribeVpcPeeringConnectionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcPeeringConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
