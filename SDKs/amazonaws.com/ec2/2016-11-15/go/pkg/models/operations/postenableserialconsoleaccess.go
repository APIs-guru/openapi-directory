package operations

type PostEnableSerialConsoleAccessActionEnum string

const (
	PostEnableSerialConsoleAccessActionEnumEnableSerialConsoleAccess PostEnableSerialConsoleAccessActionEnum = "EnableSerialConsoleAccess"
)

type PostEnableSerialConsoleAccessVersionEnum string

const (
	PostEnableSerialConsoleAccessVersionEnumTwoThousandAndSixteen1115 PostEnableSerialConsoleAccessVersionEnum = "2016-11-15"
)

type PostEnableSerialConsoleAccessQueryParams struct {
	Action  PostEnableSerialConsoleAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableSerialConsoleAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableSerialConsoleAccessHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableSerialConsoleAccessRequest struct {
	QueryParams PostEnableSerialConsoleAccessQueryParams
	Headers     PostEnableSerialConsoleAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableSerialConsoleAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
