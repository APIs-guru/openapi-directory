package operations

type UpdateCloudFrontOriginAccessIdentity20161125PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdateCloudFrontOriginAccessIdentity20161125Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCloudFrontOriginAccessIdentity20161125Request struct {
	PathParams UpdateCloudFrontOriginAccessIdentity20161125PathParams
	Headers    UpdateCloudFrontOriginAccessIdentity20161125Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type UpdateCloudFrontOriginAccessIdentity20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
