package operations

type GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum string

const (
	GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnumDecreaseNodeGroupsInGlobalReplicationGroup GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum = "DecreaseNodeGroupsInGlobalReplicationGroup"
)

type GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum string

const (
	GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams struct {
	Action                   GetDecreaseNodeGroupsInGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplyImmediately         bool                                                     `queryParam:"style=form,explode=true,name=ApplyImmediately"`
	GlobalNodeGroupsToRemove []string                                                 `queryParam:"style=form,explode=true,name=GlobalNodeGroupsToRemove"`
	GlobalNodeGroupsToRetain []string                                                 `queryParam:"style=form,explode=true,name=GlobalNodeGroupsToRetain"`
	GlobalReplicationGroupID string                                                   `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
	NodeGroupCount           int64                                                    `queryParam:"style=form,explode=true,name=NodeGroupCount"`
	Version                  GetDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDecreaseNodeGroupsInGlobalReplicationGroupRequest struct {
	QueryParams GetDecreaseNodeGroupsInGlobalReplicationGroupQueryParams
	Headers     GetDecreaseNodeGroupsInGlobalReplicationGroupHeaders
}

type GetDecreaseNodeGroupsInGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
