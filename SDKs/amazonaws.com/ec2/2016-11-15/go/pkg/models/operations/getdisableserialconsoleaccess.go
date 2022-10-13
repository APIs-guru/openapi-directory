package operations

type GetDisableSerialConsoleAccessActionEnum string

const (
	GetDisableSerialConsoleAccessActionEnumDisableSerialConsoleAccess GetDisableSerialConsoleAccessActionEnum = "DisableSerialConsoleAccess"
)

type GetDisableSerialConsoleAccessVersionEnum string

const (
	GetDisableSerialConsoleAccessVersionEnumTwoThousandAndSixteen1115 GetDisableSerialConsoleAccessVersionEnum = "2016-11-15"
)

type GetDisableSerialConsoleAccessQueryParams struct {
	Action  GetDisableSerialConsoleAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                    `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetDisableSerialConsoleAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableSerialConsoleAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableSerialConsoleAccessRequest struct {
	QueryParams GetDisableSerialConsoleAccessQueryParams
	Headers     GetDisableSerialConsoleAccessHeaders
}

type GetDisableSerialConsoleAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
