package operations

type GetDescribeSnapshotsActionEnum string

const (
	GetDescribeSnapshotsActionEnumDescribeSnapshots GetDescribeSnapshotsActionEnum = "DescribeSnapshots"
)

type GetDescribeSnapshotsVersionEnum string

const (
	GetDescribeSnapshotsVersionEnumTwoThousandAndFifteen0202 GetDescribeSnapshotsVersionEnum = "2015-02-02"
)

type GetDescribeSnapshotsQueryParams struct {
	Action              GetDescribeSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CacheClusterID      *string                         `queryParam:"style=form,explode=true,name=CacheClusterId"`
	Marker              *string                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords          *int64                          `queryParam:"style=form,explode=true,name=MaxRecords"`
	ReplicationGroupID  *string                         `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	ShowNodeGroupConfig *bool                           `queryParam:"style=form,explode=true,name=ShowNodeGroupConfig"`
	SnapshotName        *string                         `queryParam:"style=form,explode=true,name=SnapshotName"`
	SnapshotSource      *string                         `queryParam:"style=form,explode=true,name=SnapshotSource"`
	Version             GetDescribeSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeSnapshotsRequest struct {
	QueryParams GetDescribeSnapshotsQueryParams
	Headers     GetDescribeSnapshotsHeaders
}

type GetDescribeSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
