package operations

type GetDeleteFlowLogsActionEnum string

const (
	GetDeleteFlowLogsActionEnumDeleteFlowLogs GetDeleteFlowLogsActionEnum = "DeleteFlowLogs"
)

type GetDeleteFlowLogsVersionEnum string

const (
	GetDeleteFlowLogsVersionEnumTwoThousandAndSixteen1115 GetDeleteFlowLogsVersionEnum = "2016-11-15"
)

type GetDeleteFlowLogsQueryParams struct {
	Action    GetDeleteFlowLogsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun    *bool                        `queryParam:"style=form,explode=true,name=DryRun"`
	FlowLogID []string                     `queryParam:"style=form,explode=true,name=FlowLogId"`
	Version   GetDeleteFlowLogsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteFlowLogsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteFlowLogsRequest struct {
	QueryParams GetDeleteFlowLogsQueryParams
	Headers     GetDeleteFlowLogsHeaders
}

type GetDeleteFlowLogsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
