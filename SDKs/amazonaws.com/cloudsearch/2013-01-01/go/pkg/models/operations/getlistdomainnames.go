package operations

type GetListDomainNamesActionEnum string

const (
	GetListDomainNamesActionEnumListDomainNames GetListDomainNamesActionEnum = "ListDomainNames"
)

type GetListDomainNamesVersionEnum string

const (
	GetListDomainNamesVersionEnumTwoThousandAndThirteen0101 GetListDomainNamesVersionEnum = "2013-01-01"
)

type GetListDomainNamesQueryParams struct {
	Action  GetListDomainNamesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetListDomainNamesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListDomainNamesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListDomainNamesRequest struct {
	QueryParams GetListDomainNamesQueryParams
	Headers     GetListDomainNamesHeaders
}

type GetListDomainNamesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
