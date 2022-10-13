package operations

type PostVerifyDomainIdentityActionEnum string

const (
	PostVerifyDomainIdentityActionEnumVerifyDomainIdentity PostVerifyDomainIdentityActionEnum = "VerifyDomainIdentity"
)

type PostVerifyDomainIdentityVersionEnum string

const (
	PostVerifyDomainIdentityVersionEnumTwoThousandAndTen1201 PostVerifyDomainIdentityVersionEnum = "2010-12-01"
)

type PostVerifyDomainIdentityQueryParams struct {
	Action  PostVerifyDomainIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostVerifyDomainIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostVerifyDomainIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostVerifyDomainIdentityRequest struct {
	QueryParams PostVerifyDomainIdentityQueryParams
	Headers     PostVerifyDomainIdentityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostVerifyDomainIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
