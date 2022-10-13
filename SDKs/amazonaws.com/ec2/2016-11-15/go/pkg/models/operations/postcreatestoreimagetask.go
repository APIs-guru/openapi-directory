package operations

type PostCreateStoreImageTaskActionEnum string

const (
	PostCreateStoreImageTaskActionEnumCreateStoreImageTask PostCreateStoreImageTaskActionEnum = "CreateStoreImageTask"
)

type PostCreateStoreImageTaskVersionEnum string

const (
	PostCreateStoreImageTaskVersionEnumTwoThousandAndSixteen1115 PostCreateStoreImageTaskVersionEnum = "2016-11-15"
)

type PostCreateStoreImageTaskQueryParams struct {
	Action  PostCreateStoreImageTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateStoreImageTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateStoreImageTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateStoreImageTaskRequest struct {
	QueryParams PostCreateStoreImageTaskQueryParams
	Headers     PostCreateStoreImageTaskHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateStoreImageTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
