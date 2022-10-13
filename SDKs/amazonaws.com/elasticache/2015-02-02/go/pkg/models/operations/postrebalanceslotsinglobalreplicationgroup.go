package operations

type PostRebalanceSlotsInGlobalReplicationGroupActionEnum string

const (
	PostRebalanceSlotsInGlobalReplicationGroupActionEnumRebalanceSlotsInGlobalReplicationGroup PostRebalanceSlotsInGlobalReplicationGroupActionEnum = "RebalanceSlotsInGlobalReplicationGroup"
)

type PostRebalanceSlotsInGlobalReplicationGroupVersionEnum string

const (
	PostRebalanceSlotsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostRebalanceSlotsInGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type PostRebalanceSlotsInGlobalReplicationGroupQueryParams struct {
	Action  PostRebalanceSlotsInGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRebalanceSlotsInGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRebalanceSlotsInGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRebalanceSlotsInGlobalReplicationGroupRequest struct {
	QueryParams PostRebalanceSlotsInGlobalReplicationGroupQueryParams
	Headers     PostRebalanceSlotsInGlobalReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRebalanceSlotsInGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
