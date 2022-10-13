package operations

type GetCloudFrontOriginAccessIdentityConfig20170325PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetCloudFrontOriginAccessIdentityConfig20170325Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCloudFrontOriginAccessIdentityConfig20170325Request struct {
	PathParams GetCloudFrontOriginAccessIdentityConfig20170325PathParams
	Headers    GetCloudFrontOriginAccessIdentityConfig20170325Headers
}

type GetCloudFrontOriginAccessIdentityConfig20170325Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
