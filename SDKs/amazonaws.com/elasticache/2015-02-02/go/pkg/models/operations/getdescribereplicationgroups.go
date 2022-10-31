package operations

type GetDescribeReplicationGroupsActionEnum string

const (
	GetDescribeReplicationGroupsActionEnumDescribeReplicationGroups GetDescribeReplicationGroupsActionEnum = "DescribeReplicationGroups"
)

type GetDescribeReplicationGroupsVersionEnum string

const (
	GetDescribeReplicationGroupsVersionEnumTwoThousandAndFifteen0202 GetDescribeReplicationGroupsVersionEnum = "2015-02-02"
)

type GetDescribeReplicationGroupsQueryParams struct {
	Action             GetDescribeReplicationGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker             *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords         *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	ReplicationGroupID *string                                 `queryParam:"style=form,explode=true,name=ReplicationGroupId"`
	Version            GetDescribeReplicationGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReplicationGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeReplicationGroupsRequest struct {
	QueryParams GetDescribeReplicationGroupsQueryParams
	Headers     GetDescribeReplicationGroupsHeaders
}

type GetDescribeReplicationGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
