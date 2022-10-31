package operations

type UpdatePublicKey20180618PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdatePublicKey20180618Headers struct {
	IfMatch           *string `header:"style=simple,explode=false,name=If-Match"`
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdatePublicKey20180618Request struct {
	PathParams UpdatePublicKey20180618PathParams
	Headers    UpdatePublicKey20180618Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type UpdatePublicKey20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
