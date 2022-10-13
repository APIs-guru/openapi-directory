package operations

type GetInvalidation20161125PathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
	ID             string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetInvalidation20161125Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInvalidation20161125Request struct {
	PathParams GetInvalidation20161125PathParams
	Headers    GetInvalidation20161125Headers
}

type GetInvalidation20161125Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
