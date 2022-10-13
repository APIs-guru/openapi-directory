package operations

type GetVerifyDomainIdentityActionEnum string

const (
	GetVerifyDomainIdentityActionEnumVerifyDomainIdentity GetVerifyDomainIdentityActionEnum = "VerifyDomainIdentity"
)

type GetVerifyDomainIdentityVersionEnum string

const (
	GetVerifyDomainIdentityVersionEnumTwoThousandAndTen1201 GetVerifyDomainIdentityVersionEnum = "2010-12-01"
)

type GetVerifyDomainIdentityQueryParams struct {
	Action  GetVerifyDomainIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Domain  string                             `queryParam:"style=form,explode=true,name=Domain"`
	Version GetVerifyDomainIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetVerifyDomainIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVerifyDomainIdentityRequest struct {
	QueryParams GetVerifyDomainIdentityQueryParams
	Headers     GetVerifyDomainIdentityHeaders
}

type GetVerifyDomainIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
