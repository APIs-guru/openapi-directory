package operations

type PostDescribeAccountLimitsActionEnum string

const (
	PostDescribeAccountLimitsActionEnumDescribeAccountLimits PostDescribeAccountLimitsActionEnum = "DescribeAccountLimits"
)

type PostDescribeAccountLimitsVersionEnum string

const (
	PostDescribeAccountLimitsVersionEnumTwoThousandAndTwelve0601 PostDescribeAccountLimitsVersionEnum = "2012-06-01"
)

type PostDescribeAccountLimitsQueryParams struct {
	Action  PostDescribeAccountLimitsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAccountLimitsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAccountLimitsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAccountLimitsRequest struct {
	QueryParams PostDescribeAccountLimitsQueryParams
	Headers     PostDescribeAccountLimitsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAccountLimitsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
