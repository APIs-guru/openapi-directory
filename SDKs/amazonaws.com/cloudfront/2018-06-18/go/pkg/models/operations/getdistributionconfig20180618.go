package operations

type GetDistributionConfig20180618PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type GetDistributionConfig20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDistributionConfig20180618Request struct {
	PathParams GetDistributionConfig20180618PathParams
	Headers    GetDistributionConfig20180618Headers
}

type GetDistributionConfig20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
