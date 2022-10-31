package operations

type GetDeactivateMfaDeviceActionEnum string

const (
	GetDeactivateMfaDeviceActionEnumDeactivateMfaDevice GetDeactivateMfaDeviceActionEnum = "DeactivateMFADevice"
)

type GetDeactivateMfaDeviceVersionEnum string

const (
	GetDeactivateMfaDeviceVersionEnumTwoThousandAndTen0508 GetDeactivateMfaDeviceVersionEnum = "2010-05-08"
)

type GetDeactivateMfaDeviceQueryParams struct {
	Action       GetDeactivateMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SerialNumber string                            `queryParam:"style=form,explode=true,name=SerialNumber"`
	UserName     string                            `queryParam:"style=form,explode=true,name=UserName"`
	Version      GetDeactivateMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeactivateMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeactivateMfaDeviceRequest struct {
	QueryParams GetDeactivateMfaDeviceQueryParams
	Headers     GetDeactivateMfaDeviceHeaders
}

type GetDeactivateMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
