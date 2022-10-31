package operations

type GetDescribeAccountLimitsActionEnum string

const (
	GetDescribeAccountLimitsActionEnumDescribeAccountLimits GetDescribeAccountLimitsActionEnum = "DescribeAccountLimits"
)

type GetDescribeAccountLimitsVersionEnum string

const (
	GetDescribeAccountLimitsVersionEnumTwoThousandAndTwelve0601 GetDescribeAccountLimitsVersionEnum = "2012-06-01"
)

type GetDescribeAccountLimitsQueryParams struct {
	Action   GetDescribeAccountLimitsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker   *string                             `queryParam:"style=form,explode=true,name=Marker"`
	PageSize *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	Version  GetDescribeAccountLimitsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAccountLimitsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
