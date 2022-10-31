package operations

type GetCloudFrontOriginAccessIdentity20180618PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetCloudFrontOriginAccessIdentity20180618Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCloudFrontOriginAccessIdentity20180618Request struct {
	PathParams GetCloudFrontOriginAccessIdentity20180618PathParams
	Headers    GetCloudFrontOriginAccessIdentity20180618Headers
}

type GetCloudFrontOriginAccessIdentity20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
