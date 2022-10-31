package operations

type PostPutLifecycleHookActionEnum string

const (
	PostPutLifecycleHookActionEnumPutLifecycleHook PostPutLifecycleHookActionEnum = "PutLifecycleHook"
)

type PostPutLifecycleHookVersionEnum string

const (
	PostPutLifecycleHookVersionEnumTwoThousandAndEleven0101 PostPutLifecycleHookVersionEnum = "2011-01-01"
)

type PostPutLifecycleHookQueryParams struct {
	Action  PostPutLifecycleHookActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutLifecycleHookVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutLifecycleHookHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutLifecycleHookRequest struct {
	QueryParams PostPutLifecycleHookQueryParams
	Headers     PostPutLifecycleHookHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutLifecycleHookResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
