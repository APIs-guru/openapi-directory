package operations

type UpdateDistribution20170325PathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type UpdateDistribution20170325Headers struct {
	IfMatch           *string `header:"name=If-Match"`
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDistribution20170325Request struct {
	PathParams UpdateDistribution20170325PathParams
	Headers    UpdateDistribution20170325Headers
	Request    []byte `request:"mediaType=text/xml"`
}

type UpdateDistribution20170325Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
