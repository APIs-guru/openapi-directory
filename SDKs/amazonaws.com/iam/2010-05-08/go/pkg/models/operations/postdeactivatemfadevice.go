package operations

type PostDeactivateMfaDeviceActionEnum string

const (
	PostDeactivateMfaDeviceActionEnumDeactivateMfaDevice PostDeactivateMfaDeviceActionEnum = "DeactivateMFADevice"
)

type PostDeactivateMfaDeviceVersionEnum string

const (
	PostDeactivateMfaDeviceVersionEnumTwoThousandAndTen0508 PostDeactivateMfaDeviceVersionEnum = "2010-05-08"
)

type PostDeactivateMfaDeviceQueryParams struct {
	Action  PostDeactivateMfaDeviceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeactivateMfaDeviceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeactivateMfaDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeactivateMfaDeviceRequest struct {
	QueryParams PostDeactivateMfaDeviceQueryParams
	Headers     PostDeactivateMfaDeviceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeactivateMfaDeviceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
