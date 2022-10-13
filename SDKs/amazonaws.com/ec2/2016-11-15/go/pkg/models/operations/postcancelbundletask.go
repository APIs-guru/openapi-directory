package operations

type PostCancelBundleTaskActionEnum string

const (
	PostCancelBundleTaskActionEnumCancelBundleTask PostCancelBundleTaskActionEnum = "CancelBundleTask"
)

type PostCancelBundleTaskVersionEnum string

const (
	PostCancelBundleTaskVersionEnumTwoThousandAndSixteen1115 PostCancelBundleTaskVersionEnum = "2016-11-15"
)

type PostCancelBundleTaskQueryParams struct {
	Action  PostCancelBundleTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCancelBundleTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCancelBundleTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCancelBundleTaskRequest struct {
	QueryParams PostCancelBundleTaskQueryParams
	Headers     PostCancelBundleTaskHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCancelBundleTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
