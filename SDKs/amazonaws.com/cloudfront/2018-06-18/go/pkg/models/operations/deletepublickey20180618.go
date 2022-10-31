package operations

type DeletePublicKey20180618PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeletePublicKey20180618Headers struct {
	IfMatch           *string `header:"style=simple,explode=false,name=If-Match"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeletePublicKey20180618Request struct {
	PathParams DeletePublicKey20180618PathParams
	Headers    DeletePublicKey20180618Headers
}

type DeletePublicKey20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
