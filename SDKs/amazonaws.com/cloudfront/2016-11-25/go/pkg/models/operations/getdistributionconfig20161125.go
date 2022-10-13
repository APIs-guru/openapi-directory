package operations

type GetDistributionConfig20161125PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetDistributionConfig20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDistributionConfig20161125Request struct {
	PathParams GetDistributionConfig20161125PathParams
	Headers    GetDistributionConfig20161125Headers
}

type GetDistributionConfig20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
