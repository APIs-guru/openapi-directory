package operations

type GetDescribeAccountLimitsActionEnum string

const (
	GetDescribeAccountLimitsActionEnumDescribeAccountLimits GetDescribeAccountLimitsActionEnum = "DescribeAccountLimits"
)

type GetDescribeAccountLimitsVersionEnum string

const (
	GetDescribeAccountLimitsVersionEnumTwoThousandAndEleven0101 GetDescribeAccountLimitsVersionEnum = "2011-01-01"
)

type GetDescribeAccountLimitsQueryParams struct {
	Action  GetDescribeAccountLimitsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeAccountLimitsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAccountLimitsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeAccountLimitsRequest struct {
	QueryParams GetDescribeAccountLimitsQueryParams
	Headers     GetDescribeAccountLimitsHeaders
}

type GetDescribeAccountLimitsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
