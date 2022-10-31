package operations

type PostDescribeStoreImageTasksActionEnum string

const (
	PostDescribeStoreImageTasksActionEnumDescribeStoreImageTasks PostDescribeStoreImageTasksActionEnum = "DescribeStoreImageTasks"
)

type PostDescribeStoreImageTasksVersionEnum string

const (
	PostDescribeStoreImageTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeStoreImageTasksVersionEnum = "2016-11-15"
)

type PostDescribeStoreImageTasksQueryParams struct {
	Action     PostDescribeStoreImageTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeStoreImageTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeStoreImageTasksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeStoreImageTasksRequest struct {
	QueryParams PostDescribeStoreImageTasksQueryParams
	Headers     PostDescribeStoreImageTasksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeStoreImageTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
