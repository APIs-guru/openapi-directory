package operations

type PostVerifyDomainDkimActionEnum string

const (
	PostVerifyDomainDkimActionEnumVerifyDomainDkim PostVerifyDomainDkimActionEnum = "VerifyDomainDkim"
)

type PostVerifyDomainDkimVersionEnum string

const (
	PostVerifyDomainDkimVersionEnumTwoThousandAndTen1201 PostVerifyDomainDkimVersionEnum = "2010-12-01"
)

type PostVerifyDomainDkimQueryParams struct {
	Action  PostVerifyDomainDkimActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostVerifyDomainDkimVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostVerifyDomainDkimHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostVerifyDomainDkimRequest struct {
	QueryParams PostVerifyDomainDkimQueryParams
	Headers     PostVerifyDomainDkimHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostVerifyDomainDkimResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
