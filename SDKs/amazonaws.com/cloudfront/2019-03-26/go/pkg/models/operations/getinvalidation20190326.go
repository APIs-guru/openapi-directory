package operations

type GetInvalidation20190326PathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
	ID             string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetInvalidation20190326Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInvalidation20190326Request struct {
	PathParams GetInvalidation20190326PathParams
	Headers    GetInvalidation20190326Headers
}

type GetInvalidation20190326Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
