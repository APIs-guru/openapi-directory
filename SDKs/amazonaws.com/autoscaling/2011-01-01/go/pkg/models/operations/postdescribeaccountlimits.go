package operations

type PostDescribeAccountLimitsActionEnum string

const (
	PostDescribeAccountLimitsActionEnumDescribeAccountLimits PostDescribeAccountLimitsActionEnum = "DescribeAccountLimits"
)

type PostDescribeAccountLimitsVersionEnum string

const (
	PostDescribeAccountLimitsVersionEnumTwoThousandAndEleven0101 PostDescribeAccountLimitsVersionEnum = "2011-01-01"
)

type PostDescribeAccountLimitsQueryParams struct {
	Action  PostDescribeAccountLimitsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAccountLimitsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAccountLimitsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeAccountLimitsRequest struct {
	QueryParams PostDescribeAccountLimitsQueryParams
	Headers     PostDescribeAccountLimitsHeaders
}

type PostDescribeAccountLimitsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
