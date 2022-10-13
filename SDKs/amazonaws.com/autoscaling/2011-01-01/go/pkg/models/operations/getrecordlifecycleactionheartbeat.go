package operations

type GetRecordLifecycleActionHeartbeatActionEnum string

const (
	GetRecordLifecycleActionHeartbeatActionEnumRecordLifecycleActionHeartbeat GetRecordLifecycleActionHeartbeatActionEnum = "RecordLifecycleActionHeartbeat"
)

type GetRecordLifecycleActionHeartbeatVersionEnum string

const (
	GetRecordLifecycleActionHeartbeatVersionEnumTwoThousandAndEleven0101 GetRecordLifecycleActionHeartbeatVersionEnum = "2011-01-01"
)

type GetRecordLifecycleActionHeartbeatQueryParams struct {
	Action               GetRecordLifecycleActionHeartbeatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                       `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	InstanceID           *string                                      `queryParam:"style=form,explode=true,name=InstanceId"`
	LifecycleActionToken *string                                      `queryParam:"style=form,explode=true,name=LifecycleActionToken"`
	LifecycleHookName    string                                       `queryParam:"style=form,explode=true,name=LifecycleHookName"`
	Version              GetRecordLifecycleActionHeartbeatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRecordLifecycleActionHeartbeatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRecordLifecycleActionHeartbeatRequest struct {
	QueryParams GetRecordLifecycleActionHeartbeatQueryParams
	Headers     GetRecordLifecycleActionHeartbeatHeaders
}

type GetRecordLifecycleActionHeartbeatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
