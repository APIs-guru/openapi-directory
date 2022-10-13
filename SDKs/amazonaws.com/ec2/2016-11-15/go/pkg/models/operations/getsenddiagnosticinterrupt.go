package operations

type GetSendDiagnosticInterruptActionEnum string

const (
	GetSendDiagnosticInterruptActionEnumSendDiagnosticInterrupt GetSendDiagnosticInterruptActionEnum = "SendDiagnosticInterrupt"
)

type GetSendDiagnosticInterruptVersionEnum string

const (
	GetSendDiagnosticInterruptVersionEnumTwoThousandAndSixteen1115 GetSendDiagnosticInterruptVersionEnum = "2016-11-15"
)

type GetSendDiagnosticInterruptQueryParams struct {
	Action     GetSendDiagnosticInterruptActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                                `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetSendDiagnosticInterruptVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSendDiagnosticInterruptHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSendDiagnosticInterruptRequest struct {
	QueryParams GetSendDiagnosticInterruptQueryParams
	Headers     GetSendDiagnosticInterruptHeaders
}

type GetSendDiagnosticInterruptResponse struct {
	ContentType string
	StatusCode  int64
}
