package operations

type PostVerifyEmailIdentityActionEnum string

const (
	PostVerifyEmailIdentityActionEnumVerifyEmailIdentity PostVerifyEmailIdentityActionEnum = "VerifyEmailIdentity"
)

type PostVerifyEmailIdentityVersionEnum string

const (
	PostVerifyEmailIdentityVersionEnumTwoThousandAndTen1201 PostVerifyEmailIdentityVersionEnum = "2010-12-01"
)

type PostVerifyEmailIdentityQueryParams struct {
	Action  PostVerifyEmailIdentityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostVerifyEmailIdentityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostVerifyEmailIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostVerifyEmailIdentityRequest struct {
	QueryParams PostVerifyEmailIdentityQueryParams
	Headers     PostVerifyEmailIdentityHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostVerifyEmailIdentityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
