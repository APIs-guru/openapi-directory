package operations

type GetDeleteReplicationGroupActionEnum string

const (
	GetDeleteReplicationGroupActionEnumDeleteReplicationGroup GetDeleteReplicationGroupActionEnum = "DeleteReplicationGroup"
)

type GetDeleteReplicationGroupVersionEnum string

const (
	GetDeleteReplicationGroupVersionEnumTwoThousandAndFifteen0202 GetDeleteReplicationGroupVersionEnum = "2015-02-02"
)

type GetDeleteReplicationGroupQueryParams struct {
	Action                  GetDeleteReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	FinalSnapshotIdentifier *string                              `queryParam:"style=form,explode=true,name=FinalSnapshotIdentifier"`
	ReplicationGroupID      string                               `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	RetainPrimaryCluster    *bool                                `queryParam:"style=form,explode=true,name=RetainPrimaryCluster"`
	Version                 GetDeleteReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteReplicationGroupRequest struct {
	QueryParams GetDeleteReplicationGroupQueryParams
	Headers     GetDeleteReplicationGroupHeaders
}

type GetDeleteReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
