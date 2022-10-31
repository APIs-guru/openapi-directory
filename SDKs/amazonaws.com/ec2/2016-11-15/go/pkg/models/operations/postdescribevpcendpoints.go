package operations

type PostDescribeVpcEndpointsActionEnum string

const (
	PostDescribeVpcEndpointsActionEnumDescribeVpcEndpoints PostDescribeVpcEndpointsActionEnum = "DescribeVpcEndpoints"
)

type PostDescribeVpcEndpointsVersionEnum string

const (
	PostDescribeVpcEndpointsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpcEndpointsVersionEnum = "2016-11-15"
)

type PostDescribeVpcEndpointsQueryParams struct {
	Action     PostDescribeVpcEndpointsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeVpcEndpointsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpcEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpcEndpointsRequest struct {
	QueryParams PostDescribeVpcEndpointsQueryParams
	Headers     PostDescribeVpcEndpointsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpcEndpointsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
