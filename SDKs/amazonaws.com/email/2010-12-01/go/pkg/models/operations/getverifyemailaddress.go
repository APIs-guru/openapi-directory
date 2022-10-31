package operations

type GetVerifyEmailAddressActionEnum string

const (
	GetVerifyEmailAddressActionEnumVerifyEmailAddress GetVerifyEmailAddressActionEnum = "VerifyEmailAddress"
)

type GetVerifyEmailAddressVersionEnum string

const (
	GetVerifyEmailAddressVersionEnumTwoThousandAndTen1201 GetVerifyEmailAddressVersionEnum = "2010-12-01"
)

type GetVerifyEmailAddressQueryParams struct {
	Action       GetVerifyEmailAddressActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EmailAddress string                           `queryParam:"style=form,explode=true,name=EmailAddress"`
	Version      GetVerifyEmailAddressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetVerifyEmailAddressHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetVerifyEmailAddressRequest struct {
	QueryParams GetVerifyEmailAddressQueryParams
	Headers     GetVerifyEmailAddressHeaders
}

type GetVerifyEmailAddressResponse struct {
	ContentType string
	StatusCode  int64
}
