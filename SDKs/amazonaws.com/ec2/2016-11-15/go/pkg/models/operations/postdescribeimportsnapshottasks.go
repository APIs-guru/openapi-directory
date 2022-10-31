package operations

type PostDescribeImportSnapshotTasksActionEnum string

const (
	PostDescribeImportSnapshotTasksActionEnumDescribeImportSnapshotTasks PostDescribeImportSnapshotTasksActionEnum = "DescribeImportSnapshotTasks"
)

type PostDescribeImportSnapshotTasksVersionEnum string

const (
	PostDescribeImportSnapshotTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeImportSnapshotTasksVersionEnum = "2016-11-15"
)

type PostDescribeImportSnapshotTasksQueryParams struct {
	Action     PostDescribeImportSnapshotTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                    `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                    `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeImportSnapshotTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeImportSnapshotTasksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeImportSnapshotTasksRequest struct {
	QueryParams PostDescribeImportSnapshotTasksQueryParams
	Headers     PostDescribeImportSnapshotTasksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeImportSnapshotTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
