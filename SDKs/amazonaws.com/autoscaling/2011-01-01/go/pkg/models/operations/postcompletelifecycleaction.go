package operations

type PostCompleteLifecycleActionActionEnum string

const (
	PostCompleteLifecycleActionActionEnumCompleteLifecycleAction PostCompleteLifecycleActionActionEnum = "CompleteLifecycleAction"
)

type PostCompleteLifecycleActionVersionEnum string

const (
	PostCompleteLifecycleActionVersionEnumTwoThousandAndEleven0101 PostCompleteLifecycleActionVersionEnum = "2011-01-01"
)

type PostCompleteLifecycleActionQueryParams struct {
	Action  PostCompleteLifecycleActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCompleteLifecycleActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCompleteLifecycleActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCompleteLifecycleActionRequest struct {
	QueryParams PostCompleteLifecycleActionQueryParams
	Headers     PostCompleteLifecycleActionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCompleteLifecycleActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
