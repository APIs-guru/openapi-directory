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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
