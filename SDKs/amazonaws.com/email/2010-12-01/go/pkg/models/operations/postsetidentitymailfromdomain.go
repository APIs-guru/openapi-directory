package operations

type PostSetIdentityMailFromDomainActionEnum string

const (
	PostSetIdentityMailFromDomainActionEnumSetIdentityMailFromDomain PostSetIdentityMailFromDomainActionEnum = "SetIdentityMailFromDomain"
)

type PostSetIdentityMailFromDomainVersionEnum string

const (
	PostSetIdentityMailFromDomainVersionEnumTwoThousandAndTen1201 PostSetIdentityMailFromDomainVersionEnum = "2010-12-01"
)

type PostSetIdentityMailFromDomainQueryParams struct {
	Action  PostSetIdentityMailFromDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetIdentityMailFromDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetIdentityMailFromDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetIdentityMailFromDomainRequest struct {
	QueryParams PostSetIdentityMailFromDomainQueryParams
	Headers     PostSetIdentityMailFromDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetIdentityMailFromDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
