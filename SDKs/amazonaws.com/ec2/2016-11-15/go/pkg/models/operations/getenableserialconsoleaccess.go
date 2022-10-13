package operations

type GetEnableSerialConsoleAccessActionEnum string

const (
	GetEnableSerialConsoleAccessActionEnumEnableSerialConsoleAccess GetEnableSerialConsoleAccessActionEnum = "EnableSerialConsoleAccess"
)

type GetEnableSerialConsoleAccessVersionEnum string

const (
	GetEnableSerialConsoleAccessVersionEnumTwoThousandAndSixteen1115 GetEnableSerialConsoleAccessVersionEnum = "2016-11-15"
)

type GetEnableSerialConsoleAccessQueryParams struct {
	Action  GetEnableSerialConsoleAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                   `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetEnableSerialConsoleAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableSerialConsoleAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableSerialConsoleAccessRequest struct {
	QueryParams GetEnableSerialConsoleAccessQueryParams
	Headers     GetEnableSerialConsoleAccessHeaders
}

type GetEnableSerialConsoleAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
