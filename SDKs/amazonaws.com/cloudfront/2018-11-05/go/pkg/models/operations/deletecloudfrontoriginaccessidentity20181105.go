package operations

type DeleteCloudFrontOriginAccessIdentity20181105PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeleteCloudFrontOriginAccessIdentity20181105Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteCloudFrontOriginAccessIdentity20181105Request struct {
	PathParams DeleteCloudFrontOriginAccessIdentity20181105PathParams
	Headers    DeleteCloudFrontOriginAccessIdentity20181105Headers
}

type DeleteCloudFrontOriginAccessIdentity20181105Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
