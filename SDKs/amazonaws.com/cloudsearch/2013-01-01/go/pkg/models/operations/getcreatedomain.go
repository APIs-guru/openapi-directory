package operations

type GetCreateDomainActionEnum string

const (
	GetCreateDomainActionEnumCreateDomain GetCreateDomainActionEnum = "CreateDomain"
)

type GetCreateDomainVersionEnum string

const (
	GetCreateDomainVersionEnumTwoThousandAndThirteen0101 GetCreateDomainVersionEnum = "2013-01-01"
)

type GetCreateDomainQueryParams struct {
	Action     GetCreateDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                     `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetCreateDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateDomainRequest struct {
	QueryParams GetCreateDomainQueryParams
	Headers     GetCreateDomainHeaders
}

type GetCreateDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
