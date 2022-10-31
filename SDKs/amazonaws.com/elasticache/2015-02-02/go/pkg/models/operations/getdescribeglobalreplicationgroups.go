package operations

type GetDescribeGlobalReplicationGroupsActionEnum string

const (
	GetDescribeGlobalReplicationGroupsActionEnumDescribeGlobalReplicationGroups GetDescribeGlobalReplicationGroupsActionEnum = "DescribeGlobalReplicationGroups"
)

type GetDescribeGlobalReplicationGroupsVersionEnum string

const (
	GetDescribeGlobalReplicationGroupsVersionEnumTwoThousandAndFifteen0202 GetDescribeGlobalReplicationGroupsVersionEnum = "2015-02-02"
)

type GetDescribeGlobalReplicationGroupsQueryParams struct {
	Action                   GetDescribeGlobalReplicationGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	GlobalReplicationGroupID *string                                       `queryParam:"style=form,explode=true,name=GlobalReplicationGroupId"`
	Marker                   *string                                       `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords               *int64                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	ShowMemberInfo           *bool                                         `queryParam:"style=form,explode=true,name=ShowMemberInfo"`
	Version                  GetDescribeGlobalReplicationGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeGlobalReplicationGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeGlobalReplicationGroupsRequest struct {
	QueryParams GetDescribeGlobalReplicationGroupsQueryParams
	Headers     GetDescribeGlobalReplicationGroupsHeaders
}

type GetDescribeGlobalReplicationGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
