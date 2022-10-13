package operations

type GetUntagMfaDeviceActionEnum string

const (
	GetUntagMfaDeviceActionEnumUntagMfaDevice GetUntagMfaDeviceActionEnum = "UntagMFADevice"
)

type GetUntagMfaDeviceVersionEnum string

const (
	GetUntagMfaDeviceVersionEnumTwoThousandAndTen0508 GetUntagMfaDeviceVersionEnum = "2010-05-08"
)

type GetUntagMfaDeviceQueryParams struct {
	Action       GetUntagMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SerialNumber string                       `queryParam:"style=form,explode=true,name=SerialNumber"`
	TagKeys      []string                     `queryParam:"style=form,explode=true,name=TagKeys"`
	Version      GetUntagMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagMfaDeviceRequest struct {
	QueryParams GetUntagMfaDeviceQueryParams
	Headers     GetUntagMfaDeviceHeaders
}

type GetUntagMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
