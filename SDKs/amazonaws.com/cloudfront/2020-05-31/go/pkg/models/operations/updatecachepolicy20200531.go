package operations

type UpdateCachePolicy20200531PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdateCachePolicy20200531Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCachePolicy20200531Request struct {
	PathParams UpdateCachePolicy20200531PathParams
	Headers    UpdateCachePolicy20200531Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type UpdateCachePolicy20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
