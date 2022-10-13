package operations

type CreateStreamingDistributionWithTags20190326QueryParams struct {
	WithTags bool `queryParam:"style=form,explode=true,name=WithTags"`
}

type CreateStreamingDistributionWithTags20190326Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamingDistributionWithTags20190326Request struct {
	QueryParams CreateStreamingDistributionWithTags20190326QueryParams
	Headers     CreateStreamingDistributionWithTags20190326Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type CreateStreamingDistributionWithTags20190326Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
