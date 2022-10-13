package operations

type PostVerifyEmailAddressActionEnum string

const (
	PostVerifyEmailAddressActionEnumVerifyEmailAddress PostVerifyEmailAddressActionEnum = "VerifyEmailAddress"
)

type PostVerifyEmailAddressVersionEnum string

const (
	PostVerifyEmailAddressVersionEnumTwoThousandAndTen1201 PostVerifyEmailAddressVersionEnum = "2010-12-01"
)

type PostVerifyEmailAddressQueryParams struct {
	Action  PostVerifyEmailAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostVerifyEmailAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostVerifyEmailAddressHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostVerifyEmailAddressRequest struct {
	QueryParams PostVerifyEmailAddressQueryParams
	Headers     PostVerifyEmailAddressHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostVerifyEmailAddressResponse struct {
	ContentType string
	StatusCode  int64
}
