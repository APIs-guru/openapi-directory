package operations

type GetDistribution20161125PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetDistribution20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDistribution20161125Request struct {
	PathParams GetDistribution20161125PathParams
	Headers    GetDistribution20161125Headers
}

type GetDistribution20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
