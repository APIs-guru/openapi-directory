package operations

type CreateStreamingDistributionWithTags20161125QueryParams struct {
	WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
}

type CreateStreamingDistributionWithTags20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamingDistributionWithTags20161125Request struct {
	QueryParams CreateStreamingDistributionWithTags20161125QueryParams
	Headers     CreateStreamingDistributionWithTags20161125Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type CreateStreamingDistributionWithTags20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
