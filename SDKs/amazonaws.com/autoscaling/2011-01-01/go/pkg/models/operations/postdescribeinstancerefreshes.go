package operations

type PostDescribeInstanceRefreshesActionEnum string

const (
	PostDescribeInstanceRefreshesActionEnumDescribeInstanceRefreshes PostDescribeInstanceRefreshesActionEnum = "DescribeInstanceRefreshes"
)

type PostDescribeInstanceRefreshesVersionEnum string

const (
	PostDescribeInstanceRefreshesVersionEnumTwoThousandAndEleven0101 PostDescribeInstanceRefreshesVersionEnum = "2011-01-01"
)

type PostDescribeInstanceRefreshesQueryParams struct {
	Action  PostDescribeInstanceRefreshesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeInstanceRefreshesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInstanceRefreshesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeInstanceRefreshesRequest struct {
	QueryParams PostDescribeInstanceRefreshesQueryParams
	Headers     PostDescribeInstanceRefreshesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInstanceRefreshesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
