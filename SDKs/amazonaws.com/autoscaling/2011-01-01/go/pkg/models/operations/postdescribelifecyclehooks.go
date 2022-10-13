package operations

type PostDescribeLifecycleHooksActionEnum string

const (
	PostDescribeLifecycleHooksActionEnumDescribeLifecycleHooks PostDescribeLifecycleHooksActionEnum = "DescribeLifecycleHooks"
)

type PostDescribeLifecycleHooksVersionEnum string

const (
	PostDescribeLifecycleHooksVersionEnumTwoThousandAndEleven0101 PostDescribeLifecycleHooksVersionEnum = "2011-01-01"
)

type PostDescribeLifecycleHooksQueryParams struct {
	Action  PostDescribeLifecycleHooksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLifecycleHooksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLifecycleHooksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLifecycleHooksRequest struct {
	QueryParams PostDescribeLifecycleHooksQueryParams
	Headers     PostDescribeLifecycleHooksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLifecycleHooksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
