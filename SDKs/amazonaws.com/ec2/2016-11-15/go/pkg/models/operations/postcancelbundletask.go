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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
