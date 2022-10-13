package operations

type GetVerifyEmailIdentityActionEnum string

const (
	GetVerifyEmailIdentityActionEnumVerifyEmailIdentity GetVerifyEmailIdentityActionEnum = "VerifyEmailIdentity"
)

type GetVerifyEmailIdentityVersionEnum string

const (
	GetVerifyEmailIdentityVersionEnumTwoThousandAndTen1201 GetVerifyEmailIdentityVersionEnum = "2010-12-01"
)

type GetVerifyEmailIdentityQueryParams struct {
	Action       GetVerifyEmailIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EmailAddress string                            `queryParam:"style=form,explode=true,name=EmailAddress"`
	Version      GetVerifyEmailIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetVerifyEmailIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetVerifyEmailIdentityRequest struct {
	QueryParams GetVerifyEmailIdentityQueryParams
	Headers     GetVerifyEmailIdentityHeaders
}

type GetVerifyEmailIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
