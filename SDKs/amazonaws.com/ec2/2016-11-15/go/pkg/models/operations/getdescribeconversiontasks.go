package operations

type GetDescribeConversionTasksActionEnum string

const (
	GetDescribeConversionTasksActionEnumDescribeConversionTasks GetDescribeConversionTasksActionEnum = "DescribeConversionTasks"
)

type GetDescribeConversionTasksVersionEnum string

const (
	GetDescribeConversionTasksVersionEnumTwoThousandAndSixteen1115 GetDescribeConversionTasksVersionEnum = "2016-11-15"
)

type GetDescribeConversionTasksQueryParams struct {
	Action           GetDescribeConversionTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConversionTaskID []string                              `queryParam:"style=form,explode=true,name=ConversionTaskId"`
	DryRun           *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	Version          GetDescribeConversionTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeConversionTasksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeConversionTasksRequest struct {
	QueryParams GetDescribeConversionTasksQueryParams
	Headers     GetDescribeConversionTasksHeaders
}

type GetDescribeConversionTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
