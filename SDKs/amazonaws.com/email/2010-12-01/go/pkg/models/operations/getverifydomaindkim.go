package operations

type GetVerifyDomainDkimActionEnum string

const (
	GetVerifyDomainDkimActionEnumVerifyDomainDkim GetVerifyDomainDkimActionEnum = "VerifyDomainDkim"
)

type GetVerifyDomainDkimVersionEnum string

const (
	GetVerifyDomainDkimVersionEnumTwoThousandAndTen1201 GetVerifyDomainDkimVersionEnum = "2010-12-01"
)

type GetVerifyDomainDkimQueryParams struct {
	Action  GetVerifyDomainDkimActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Domain  string                         `queryParam:"style=form,explode=true,name=Domain"`
	Version GetVerifyDomainDkimVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetVerifyDomainDkimHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVerifyDomainDkimRequest struct {
	QueryParams GetVerifyDomainDkimQueryParams
	Headers     GetVerifyDomainDkimHeaders
}

type GetVerifyDomainDkimResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
