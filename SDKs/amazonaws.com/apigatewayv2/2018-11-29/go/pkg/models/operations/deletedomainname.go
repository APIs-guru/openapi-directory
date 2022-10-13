package operations

type DeleteDomainNamePathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
}

type DeleteDomainNameHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteDomainNameRequest struct {
	PathParams DeleteDomainNamePathParams
	Headers    DeleteDomainNameHeaders
}

type DeleteDomainNameResponse struct {
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
