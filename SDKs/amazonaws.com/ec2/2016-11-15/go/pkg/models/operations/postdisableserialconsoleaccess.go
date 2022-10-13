package operations

type PostDisableSerialConsoleAccessActionEnum string

const (
	PostDisableSerialConsoleAccessActionEnumDisableSerialConsoleAccess PostDisableSerialConsoleAccessActionEnum = "DisableSerialConsoleAccess"
)

type PostDisableSerialConsoleAccessVersionEnum string

const (
	PostDisableSerialConsoleAccessVersionEnumTwoThousandAndSixteen1115 PostDisableSerialConsoleAccessVersionEnum = "2016-11-15"
)

type PostDisableSerialConsoleAccessQueryParams struct {
	Action  PostDisableSerialConsoleAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableSerialConsoleAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableSerialConsoleAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableSerialConsoleAccessRequest struct {
	QueryParams PostDisableSerialConsoleAccessQueryParams
	Headers     PostDisableSerialConsoleAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableSerialConsoleAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
