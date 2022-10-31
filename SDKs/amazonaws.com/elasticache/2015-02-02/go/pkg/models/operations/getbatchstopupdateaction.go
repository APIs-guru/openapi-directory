package operations

type GetBatchStopUpdateActionActionEnum string

const (
	GetBatchStopUpdateActionActionEnumBatchStopUpdateAction GetBatchStopUpdateActionActionEnum = "BatchStopUpdateAction"
)

type GetBatchStopUpdateActionVersionEnum string

const (
	GetBatchStopUpdateActionVersionEnumTwoThousandAndFifteen0202 GetBatchStopUpdateActionVersionEnum = "2015-02-02"
)

type GetBatchStopUpdateActionQueryParams struct {
	Action              GetBatchStopUpdateActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheClusterIds     []string                            `queryParam:"style=form,explode=true,name=CacheClusterIds"`
	ReplicationGroupIds []string                            `queryParam:"style=form,explode=true,name=ReplicationGroupIds"`
	ServiceUpdateName   string                              `queryParam:"style=form,explode=true,name=ServiceUpdateName"`
	Version             GetBatchStopUpdateActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetBatchStopUpdateActionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBatchStopUpdateActionRequest struct {
	QueryParams GetBatchStopUpdateActionQueryParams
	Headers     GetBatchStopUpdateActionHeaders
}

type GetBatchStopUpdateActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
