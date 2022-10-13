package operations

type UpdateCloudFrontOriginAccessIdentity20190326PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdateCloudFrontOriginAccessIdentity20190326Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCloudFrontOriginAccessIdentity20190326Request struct {
	PathParams UpdateCloudFrontOriginAccessIdentity20190326PathParams
	Headers    UpdateCloudFrontOriginAccessIdentity20190326Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type UpdateCloudFrontOriginAccessIdentity20190326Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
