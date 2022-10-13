package operations

type PostDescribeBundleTasksActionEnum string

const (
	PostDescribeBundleTasksActionEnumDescribeBundleTasks PostDescribeBundleTasksActionEnum = "DescribeBundleTasks"
)

type PostDescribeBundleTasksVersionEnum string

const (
	PostDescribeBundleTasksVersionEnumTwoThousandAndSixteen1115 PostDescribeBundleTasksVersionEnum = "2016-11-15"
)

type PostDescribeBundleTasksQueryParams struct {
	Action  PostDescribeBundleTasksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeBundleTasksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeBundleTasksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeBundleTasksRequest struct {
	QueryParams PostDescribeBundleTasksQueryParams
	Headers     PostDescribeBundleTasksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeBundleTasksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
