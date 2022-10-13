package operations

type CreateFieldLevelEncryptionConfig20190326Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFieldLevelEncryptionConfig20190326Request struct {
	Headers CreateFieldLevelEncryptionConfig20190326Headers
	Request []byte `request:"mediaType=text/xml"`
}

type CreateFieldLevelEncryptionConfig20190326Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
