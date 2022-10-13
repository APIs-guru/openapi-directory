package operations

type DeletePublicKey20181105PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeletePublicKey20181105Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeletePublicKey20181105Request struct {
	PathParams DeletePublicKey20181105PathParams
	Headers    DeletePublicKey20181105Headers
}

type DeletePublicKey20181105Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
