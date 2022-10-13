package operations

type PostDeleteDomainActionEnum string

const (
	PostDeleteDomainActionEnumDeleteDomain PostDeleteDomainActionEnum = "DeleteDomain"
)

type PostDeleteDomainVersionEnum string

const (
	PostDeleteDomainVersionEnumTwoThousandAndThirteen0101 PostDeleteDomainVersionEnum = "2013-01-01"
)

type PostDeleteDomainQueryParams struct {
	Action  PostDeleteDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDomainRequest struct {
	QueryParams PostDeleteDomainQueryParams
	Headers     PostDeleteDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
