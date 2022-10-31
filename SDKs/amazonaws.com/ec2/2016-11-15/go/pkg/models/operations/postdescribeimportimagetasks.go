package operations

type PostDescribeImportImageTasksActionEnum string

const (
	PostDescribeImportImageTasksActionEnumDescribeImportImageTasks PostDescribeImportImageTasksActionEnum = "DescribeImportImageTasks"
)

type PostDescribeImportImageTasksVersionEnum string

const (
	PostDescribeImportImageTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeImportImageTasksVersionEnum = "2016-11-15"
)

type PostDescribeImportImageTasksQueryParams struct {
	Action     PostDescribeImportImageTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                 `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeImportImageTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeImportImageTasksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeImportImageTasksRequest struct {
	QueryParams PostDescribeImportImageTasksQueryParams
	Headers     PostDescribeImportImageTasksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeImportImageTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
