package operations

type ListTagsForResource20180618QueryParams struct {
	Resource string `queryParam:"style=form,explode=true,name=Resource"`
}

type ListTagsForResource20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForResource20180618Request struct {
	QueryParams ListTagsForResource20180618QueryParams
	Headers     ListTagsForResource20180618Headers
}

type ListTagsForResource20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
