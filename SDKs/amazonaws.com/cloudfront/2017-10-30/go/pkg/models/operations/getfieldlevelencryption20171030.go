package operations

type GetFieldLevelEncryption20171030PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetFieldLevelEncryption20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFieldLevelEncryption20171030Request struct {
	PathParams GetFieldLevelEncryption20171030PathParams
	Headers    GetFieldLevelEncryption20171030Headers
}

type GetFieldLevelEncryption20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
