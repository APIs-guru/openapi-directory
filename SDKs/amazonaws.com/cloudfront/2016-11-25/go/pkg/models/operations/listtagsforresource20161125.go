package operations

type ListTagsForResource20161125QueryParams struct {
	Resource string `queryParam:"style=form,explode=true,name=Resource"`
}

type ListTagsForResource20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForResource20161125Request struct {
	QueryParams ListTagsForResource20161125QueryParams
	Headers     ListTagsForResource20161125Headers
}

type ListTagsForResource20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
