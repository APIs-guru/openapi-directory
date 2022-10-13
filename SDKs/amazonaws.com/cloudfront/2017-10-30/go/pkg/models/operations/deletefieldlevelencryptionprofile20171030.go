package operations

type DeleteFieldLevelEncryptionProfile20171030PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeleteFieldLevelEncryptionProfile20171030Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteFieldLevelEncryptionProfile20171030Request struct {
	PathParams DeleteFieldLevelEncryptionProfile20171030PathParams
	Headers    DeleteFieldLevelEncryptionProfile20171030Headers
}

type DeleteFieldLevelEncryptionProfile20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
