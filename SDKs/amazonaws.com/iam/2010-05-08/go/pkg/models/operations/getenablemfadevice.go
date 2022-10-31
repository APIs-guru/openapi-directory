package operations

type GetEnableMfaDeviceActionEnum string

const (
	GetEnableMfaDeviceActionEnumEnableMfaDevice GetEnableMfaDeviceActionEnum = "EnableMFADevice"
)

type GetEnableMfaDeviceVersionEnum string

const (
	GetEnableMfaDeviceVersionEnumTwoThousandAndTen0508 GetEnableMfaDeviceVersionEnum = "2010-05-08"
)

type GetEnableMfaDeviceQueryParams struct {
	Action              GetEnableMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AuthenticationCode1 string                        `queryParam:"style=form,explode=true,name=AuthenticationCode1"`
	AuthenticationCode2 string                        `queryParam:"style=form,explode=true,name=AuthenticationCode2"`
	SerialNumber        string                        `queryParam:"style=form,explode=true,name=SerialNumber"`
	UserName            string                        `queryParam:"style=form,explode=true,name=UserName"`
	Version             GetEnableMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetEnableMfaDeviceRequest struct {
	QueryParams GetEnableMfaDeviceQueryParams
	Headers     GetEnableMfaDeviceHeaders
}

type GetEnableMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
