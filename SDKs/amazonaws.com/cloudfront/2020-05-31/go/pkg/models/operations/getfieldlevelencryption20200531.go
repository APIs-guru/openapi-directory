package operations

type GetFieldLevelEncryption20200531PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetFieldLevelEncryption20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFieldLevelEncryption20200531Request struct {
	PathParams GetFieldLevelEncryption20200531PathParams
	Headers    GetFieldLevelEncryption20200531Headers
}

type GetFieldLevelEncryption20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
