package operations

type GetCloudFrontOriginAccessIdentityConfig20200531PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetCloudFrontOriginAccessIdentityConfig20200531Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCloudFrontOriginAccessIdentityConfig20200531Request struct {
	PathParams GetCloudFrontOriginAccessIdentityConfig20200531PathParams
	Headers    GetCloudFrontOriginAccessIdentityConfig20200531Headers
}

type GetCloudFrontOriginAccessIdentityConfig20200531Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
