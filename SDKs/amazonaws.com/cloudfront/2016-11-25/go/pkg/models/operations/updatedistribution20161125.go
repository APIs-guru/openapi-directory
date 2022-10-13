package operations

type UpdateDistribution20161125PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdateDistribution20161125Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDistribution20161125Request struct {
	PathParams UpdateDistribution20161125PathParams
	Headers    UpdateDistribution20161125Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type UpdateDistribution20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
