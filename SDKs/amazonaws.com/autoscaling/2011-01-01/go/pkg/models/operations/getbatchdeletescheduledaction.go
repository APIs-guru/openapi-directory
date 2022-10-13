package operations

type GetBatchDeleteScheduledActionActionEnum string

const (
	GetBatchDeleteScheduledActionActionEnumBatchDeleteScheduledAction GetBatchDeleteScheduledActionActionEnum = "BatchDeleteScheduledAction"
)

type GetBatchDeleteScheduledActionVersionEnum string

const (
	GetBatchDeleteScheduledActionVersionEnumTwoThousandAndEleven0101 GetBatchDeleteScheduledActionVersionEnum = "2011-01-01"
)

type GetBatchDeleteScheduledActionQueryParams struct {
	Action               GetBatchDeleteScheduledActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                   `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	ScheduledActionNames []string                                 `queryParam:"style=form,explode=true,name=ScheduledActionNames"`
	Version              GetBatchDeleteScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetBatchDeleteScheduledActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBatchDeleteScheduledActionRequest struct {
	QueryParams GetBatchDeleteScheduledActionQueryParams
	Headers     GetBatchDeleteScheduledActionHeaders
}

type GetBatchDeleteScheduledActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
