package operations

type GetDeleteScheduledActionActionEnum string

const (
	GetDeleteScheduledActionActionEnumDeleteScheduledAction GetDeleteScheduledActionActionEnum = "DeleteScheduledAction"
)

type GetDeleteScheduledActionVersionEnum string

const (
	GetDeleteScheduledActionVersionEnumTwoThousandAndEleven0101 GetDeleteScheduledActionVersionEnum = "2011-01-01"
)

type GetDeleteScheduledActionQueryParams struct {
	Action               GetDeleteScheduledActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                              `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	ScheduledActionName  string                              `queryParam:"style=form,explode=true,name=ScheduledActionName"`
	Version              GetDeleteScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteScheduledActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteScheduledActionRequest struct {
	QueryParams GetDeleteScheduledActionQueryParams
	Headers     GetDeleteScheduledActionHeaders
}

type GetDeleteScheduledActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
