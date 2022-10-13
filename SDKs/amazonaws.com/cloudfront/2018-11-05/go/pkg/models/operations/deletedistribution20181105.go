package operations

type DeleteDistribution20181105PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DeleteDistribution20181105Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDistribution20181105Request struct {
	PathParams DeleteDistribution20181105PathParams
	Headers    DeleteDistribution20181105Headers
}

type DeleteDistribution20181105Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
