package operations

type GetResyncMfaDeviceActionEnum string

const (
	GetResyncMfaDeviceActionEnumResyncMfaDevice GetResyncMfaDeviceActionEnum = "ResyncMFADevice"
)

type GetResyncMfaDeviceVersionEnum string

const (
	GetResyncMfaDeviceVersionEnumTwoThousandAndTen0508 GetResyncMfaDeviceVersionEnum = "2010-05-08"
)

type GetResyncMfaDeviceQueryParams struct {
	Action              GetResyncMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AuthenticationCode1 string                        `queryParam:"style=form,explode=true,name=AuthenticationCode1"`
	AuthenticationCode2 string                        `queryParam:"style=form,explode=true,name=AuthenticationCode2"`
	SerialNumber        string                        `queryParam:"style=form,explode=true,name=SerialNumber"`
	UserName            string                        `queryParam:"style=form,explode=true,name=UserName"`
	Version             GetResyncMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResyncMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResyncMfaDeviceRequest struct {
	QueryParams GetResyncMfaDeviceQueryParams
	Headers     GetResyncMfaDeviceHeaders
}

type GetResyncMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
