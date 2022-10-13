package operations

type GetDescribeUserGroupsActionEnum string

const (
	GetDescribeUserGroupsActionEnumDescribeUserGroups GetDescribeUserGroupsActionEnum = "DescribeUserGroups"
)

type GetDescribeUserGroupsVersionEnum string

const (
	GetDescribeUserGroupsVersionEnumTwoThousandAndFifteen0202 GetDescribeUserGroupsVersionEnum = "2015-02-02"
)

type GetDescribeUserGroupsQueryParams struct {
	Action      GetDescribeUserGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker      *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords  *int64                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	UserGroupID *string                          `queryParam:"style=form,explode=true,name=UserGroupId"`
	Version     GetDescribeUserGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeUserGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeUserGroupsRequest struct {
	QueryParams GetDescribeUserGroupsQueryParams
	Headers     GetDescribeUserGroupsHeaders
}

type GetDescribeUserGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
