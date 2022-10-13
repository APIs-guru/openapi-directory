package operations

type DeleteFieldLevelEncryptionProfile20180618PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeleteFieldLevelEncryptionProfile20180618Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFieldLevelEncryptionProfile20180618Request struct {
	PathParams DeleteFieldLevelEncryptionProfile20180618PathParams
	Headers    DeleteFieldLevelEncryptionProfile20180618Headers
}

type DeleteFieldLevelEncryptionProfile20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
