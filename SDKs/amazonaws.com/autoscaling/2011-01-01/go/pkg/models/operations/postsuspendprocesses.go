package operations

type PostSuspendProcessesActionEnum string

const (
	PostSuspendProcessesActionEnumSuspendProcesses PostSuspendProcessesActionEnum = "SuspendProcesses"
)

type PostSuspendProcessesVersionEnum string

const (
	PostSuspendProcessesVersionEnumTwoThousandAndEleven0101 PostSuspendProcessesVersionEnum = "2011-01-01"
)

type PostSuspendProcessesQueryParams struct {
	Action  PostSuspendProcessesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSuspendProcessesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSuspendProcessesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSuspendProcessesRequest struct {
	QueryParams PostSuspendProcessesQueryParams
	Headers     PostSuspendProcessesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSuspendProcessesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
