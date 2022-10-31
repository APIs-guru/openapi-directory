package operations

type PostCreateDomainActionEnum string

const (
	PostCreateDomainActionEnumCreateDomain PostCreateDomainActionEnum = "CreateDomain"
)

type PostCreateDomainVersionEnum string

const (
	PostCreateDomainVersionEnumTwoThousandAndEleven0201 PostCreateDomainVersionEnum = "2011-02-01"
)

type PostCreateDomainQueryParams struct {
	Action  PostCreateDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDomainHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
