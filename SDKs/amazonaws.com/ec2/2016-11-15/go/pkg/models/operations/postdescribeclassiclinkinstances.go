package operations

type PostDescribeClassicLinkInstancesActionEnum string

const (
	PostDescribeClassicLinkInstancesActionEnumDescribeClassicLinkInstances PostDescribeClassicLinkInstancesActionEnum = "DescribeClassicLinkInstances"
)

type PostDescribeClassicLinkInstancesVersionEnum string

const (
	PostDescribeClassicLinkInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeClassicLinkInstancesVersionEnum = "2016-11-15"
)

type PostDescribeClassicLinkInstancesQueryParams struct {
	Action     PostDescribeClassicLinkInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeClassicLinkInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClassicLinkInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClassicLinkInstancesRequest struct {
	QueryParams PostDescribeClassicLinkInstancesQueryParams
	Headers     PostDescribeClassicLinkInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClassicLinkInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
