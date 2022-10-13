package operations

type PostDescribeLifecycleHookTypesActionEnum string

const (
	PostDescribeLifecycleHookTypesActionEnumDescribeLifecycleHookTypes PostDescribeLifecycleHookTypesActionEnum = "DescribeLifecycleHookTypes"
)

type PostDescribeLifecycleHookTypesVersionEnum string

const (
	PostDescribeLifecycleHookTypesVersionEnumTwoThousandAndEleven0101 PostDescribeLifecycleHookTypesVersionEnum = "2011-01-01"
)

type PostDescribeLifecycleHookTypesQueryParams struct {
	Action  PostDescribeLifecycleHookTypesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLifecycleHookTypesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLifecycleHookTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeLifecycleHookTypesRequest struct {
	QueryParams PostDescribeLifecycleHookTypesQueryParams
	Headers     PostDescribeLifecycleHookTypesHeaders
}

type PostDescribeLifecycleHookTypesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
