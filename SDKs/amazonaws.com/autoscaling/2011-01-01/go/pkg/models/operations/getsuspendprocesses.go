package operations

type GetSuspendProcessesActionEnum string

const (
	GetSuspendProcessesActionEnumSuspendProcesses GetSuspendProcessesActionEnum = "SuspendProcesses"
)

type GetSuspendProcessesVersionEnum string

const (
	GetSuspendProcessesVersionEnumTwoThousandAndEleven0101 GetSuspendProcessesVersionEnum = "2011-01-01"
)

type GetSuspendProcessesQueryParams struct {
	Action               GetSuspendProcessesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                         `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	ScalingProcesses     []string                       `queryParam:"style=form,explode=true,name=ScalingProcesses"`
	Version              GetSuspendProcessesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSuspendProcessesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSuspendProcessesRequest struct {
	QueryParams GetSuspendProcessesQueryParams
	Headers     GetSuspendProcessesHeaders
}

type GetSuspendProcessesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
