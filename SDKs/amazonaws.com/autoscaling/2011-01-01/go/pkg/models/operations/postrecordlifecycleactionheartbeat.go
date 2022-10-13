package operations

type PostRecordLifecycleActionHeartbeatActionEnum string

const (
	PostRecordLifecycleActionHeartbeatActionEnumRecordLifecycleActionHeartbeat PostRecordLifecycleActionHeartbeatActionEnum = "RecordLifecycleActionHeartbeat"
)

type PostRecordLifecycleActionHeartbeatVersionEnum string

const (
	PostRecordLifecycleActionHeartbeatVersionEnumTwoThousandAndEleven0101 PostRecordLifecycleActionHeartbeatVersionEnum = "2011-01-01"
)

type PostRecordLifecycleActionHeartbeatQueryParams struct {
	Action  PostRecordLifecycleActionHeartbeatActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRecordLifecycleActionHeartbeatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRecordLifecycleActionHeartbeatHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRecordLifecycleActionHeartbeatRequest struct {
	QueryParams PostRecordLifecycleActionHeartbeatQueryParams
	Headers     PostRecordLifecycleActionHeartbeatHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRecordLifecycleActionHeartbeatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
