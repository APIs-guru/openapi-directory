package operations

type CreateCloudFrontOriginAccessIdentity20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCloudFrontOriginAccessIdentity20200531Request struct {
	Headers CreateCloudFrontOriginAccessIdentity20200531Headers
	Request []byte `request:"mediaType=text/xml"`
}

type CreateCloudFrontOriginAccessIdentity20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
