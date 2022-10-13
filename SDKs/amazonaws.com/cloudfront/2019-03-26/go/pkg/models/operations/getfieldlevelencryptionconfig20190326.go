package operations

type GetFieldLevelEncryptionConfig20190326PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetFieldLevelEncryptionConfig20190326Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFieldLevelEncryptionConfig20190326Request struct {
	PathParams GetFieldLevelEncryptionConfig20190326PathParams
	Headers    GetFieldLevelEncryptionConfig20190326Headers
}

type GetFieldLevelEncryptionConfig20190326Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
