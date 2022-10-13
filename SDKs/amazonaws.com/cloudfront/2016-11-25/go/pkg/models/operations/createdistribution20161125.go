package operations

type CreateDistribution20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDistribution20161125Request struct {
	Headers CreateDistribution20161125Headers
	Request []byte `request:"mediaType=text/xml"`
}

type CreateDistribution20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
