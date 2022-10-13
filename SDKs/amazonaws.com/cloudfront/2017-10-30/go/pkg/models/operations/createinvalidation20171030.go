package operations

type CreateInvalidation20171030PathParams struct {
	DistributionID string `pathParam:"style=simple,explode=false,name=DistributionId"`
}

type CreateInvalidation20171030Headers struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateInvalidation20171030Request struct {
	PathParams CreateInvalidation20171030PathParams
	Headers    CreateInvalidation20171030Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type CreateInvalidation20171030Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
