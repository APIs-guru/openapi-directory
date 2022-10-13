package operations

type GetResumeProcessesActionEnum string

const (
	GetResumeProcessesActionEnumResumeProcesses GetResumeProcessesActionEnum = "ResumeProcesses"
)

type GetResumeProcessesVersionEnum string

const (
	GetResumeProcessesVersionEnumTwoThousandAndEleven0101 GetResumeProcessesVersionEnum = "2011-01-01"
)

type GetResumeProcessesQueryParams struct {
	Action               GetResumeProcessesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                        `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	ScalingProcesses     []string                      `queryParam:"style=form,explode=true,name=ScalingProcesses"`
	Version              GetResumeProcessesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResumeProcessesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResumeProcessesRequest struct {
	QueryParams GetResumeProcessesQueryParams
	Headers     GetResumeProcessesHeaders
}

type GetResumeProcessesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
