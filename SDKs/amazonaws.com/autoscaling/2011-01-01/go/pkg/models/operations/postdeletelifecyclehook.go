package operations

type PostDeleteLifecycleHookActionEnum string

const (
	PostDeleteLifecycleHookActionEnumDeleteLifecycleHook PostDeleteLifecycleHookActionEnum = "DeleteLifecycleHook"
)

type PostDeleteLifecycleHookVersionEnum string

const (
	PostDeleteLifecycleHookVersionEnumTwoThousandAndEleven0101 PostDeleteLifecycleHookVersionEnum = "2011-01-01"
)

type PostDeleteLifecycleHookQueryParams struct {
	Action  PostDeleteLifecycleHookActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLifecycleHookVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLifecycleHookHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteLifecycleHookRequest struct {
	QueryParams PostDeleteLifecycleHookQueryParams
	Headers     PostDeleteLifecycleHookHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLifecycleHookResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
