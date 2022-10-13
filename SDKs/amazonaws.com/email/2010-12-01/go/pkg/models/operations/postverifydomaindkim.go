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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
