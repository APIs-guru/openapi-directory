package operations

type PostCreateDomainActionEnum string

const (
	PostCreateDomainActionEnumCreateDomain PostCreateDomainActionEnum = "CreateDomain"
)

type PostCreateDomainVersionEnum string

const (
	PostCreateDomainVersionEnumTwoThousandAndThirteen0101 PostCreateDomainVersionEnum = "2013-01-01"
)

type PostCreateDomainQueryParams struct {
	Action  PostCreateDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDomainRequest struct {
	QueryParams PostCreateDomainQueryParams
	Headers     PostCreateDomainHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
