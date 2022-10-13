package operations

type PostDescribeInstanceEventWindowsActionEnum string

const (
	PostDescribeInstanceEventWindowsActionEnumDescribeInstanceEventWindows PostDescribeInstanceEventWindowsActionEnum = "DescribeInstanceEventWindows"
)

type PostDescribeInstanceEventWindowsVersionEnum string

const (
	PostDescribeInstanceEventWindowsVersionEnumTwoThousandAndSixteen1115 PostDescribeInstanceEventWindowsVersionEnum = "2016-11-15"
)

type PostDescribeInstanceEventWindowsQueryParams struct {
	Action     PostDescribeInstanceEventWindowsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeInstanceEventWindowsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInstanceEventWindowsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeInstanceEventWindowsRequest struct {
	QueryParams PostDescribeInstanceEventWindowsQueryParams
	Headers     PostDescribeInstanceEventWindowsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInstanceEventWindowsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
