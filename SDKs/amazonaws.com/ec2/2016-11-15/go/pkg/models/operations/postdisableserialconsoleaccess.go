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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
