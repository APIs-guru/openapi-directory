package operations

type PostCreateFlowLogsActionEnum string

const (
	PostCreateFlowLogsActionEnumCreateFlowLogs PostCreateFlowLogsActionEnum = "CreateFlowLogs"
)

type PostCreateFlowLogsVersionEnum string

const (
	PostCreateFlowLogsVersionEnumTwoThousandAndSixteen1115 PostCreateFlowLogsVersionEnum = "2016-11-15"
)

type PostCreateFlowLogsQueryParams struct {
	Action  PostCreateFlowLogsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateFlowLogsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateFlowLogsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateFlowLogsRequest struct {
	QueryParams PostCreateFlowLogsQueryParams
	Headers     PostCreateFlowLogsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateFlowLogsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
