package operations

type GetDeleteDomainActionEnum string

const (
	GetDeleteDomainActionEnumDeleteDomain GetDeleteDomainActionEnum = "DeleteDomain"
)

type GetDeleteDomainVersionEnum string

const (
	GetDeleteDomainVersionEnumTwoThousandAndEleven0201 GetDeleteDomainVersionEnum = "2011-02-01"
)

type GetDeleteDomainQueryParams struct {
	Action     GetDeleteDomainActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                     `queryParam:"style=form,explode=true,name=DomainName"`
	Version    GetDeleteDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDomainHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteDomainRequest struct {
	QueryParams GetDeleteDomainQueryParams
	Headers     GetDeleteDomainHeaders
}

type GetDeleteDomainResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
