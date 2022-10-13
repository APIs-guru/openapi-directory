package operations

type CreateStreamingDistributionWithTags20171030QueryParams struct {
	WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
}

type CreateStreamingDistributionWithTags20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamingDistributionWithTags20171030Request struct {
	QueryParams CreateStreamingDistributionWithTags20171030QueryParams
	Headers     CreateStreamingDistributionWithTags20171030Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type CreateStreamingDistributionWithTags20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
