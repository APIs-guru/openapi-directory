package operations

type CreateFieldLevelEncryptionProfile20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFieldLevelEncryptionProfile20180618Request struct {
	Headers CreateFieldLevelEncryptionProfile20180618Headers
	Request []byte `request:"mediaType=text/xml"`
}

type CreateFieldLevelEncryptionProfile20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
