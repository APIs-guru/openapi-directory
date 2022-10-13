package operations

type GetGetSerialConsoleAccessStatusActionEnum string

const (
	GetGetSerialConsoleAccessStatusActionEnumGetSerialConsoleAccessStatus GetGetSerialConsoleAccessStatusActionEnum = "GetSerialConsoleAccessStatus"
)

type GetGetSerialConsoleAccessStatusVersionEnum string

const (
	GetGetSerialConsoleAccessStatusVersionEnumTwoThousandAndSixteen1115 GetGetSerialConsoleAccessStatusVersionEnum = "2016-11-15"
)

type GetGetSerialConsoleAccessStatusQueryParams struct {
	Action  GetGetSerialConsoleAccessStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun  *bool                                      `queryParam:"style=form,explode=true,name=DryRun"`
	Version GetGetSerialConsoleAccessStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetSerialConsoleAccessStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetSerialConsoleAccessStatusRequest struct {
	QueryParams GetGetSerialConsoleAccessStatusQueryParams
	Headers     GetGetSerialConsoleAccessStatusHeaders
}

type GetGetSerialConsoleAccessStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
