package operations

type CreateInvalidation20180618PathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
}

type CreateInvalidation20180618Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateInvalidation20180618Request struct {
	PathParams CreateInvalidation20180618PathParams
	Headers    CreateInvalidation20180618Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type CreateInvalidation20180618Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
