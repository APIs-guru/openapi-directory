package operations

type PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum string

const (
	PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnumIncreaseNodeGroupsInGlobalReplicationGroup PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum = "IncreaseNodeGroupsInGlobalReplicationGroup"
)

type PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum string

const (
	PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum = "2015-02-02"
)

type PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams struct {
	Action  PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostIncreaseNodeGroupsInGlobalReplicationGroupRequest struct {
	QueryParams PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams
	Headers     PostIncreaseNodeGroupsInGlobalReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostIncreaseNodeGroupsInGlobalReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
