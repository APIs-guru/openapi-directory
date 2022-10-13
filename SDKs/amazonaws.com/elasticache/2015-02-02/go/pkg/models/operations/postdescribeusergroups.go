package operations

type PostDescribeUserGroupsActionEnum string

const (
	PostDescribeUserGroupsActionEnumDescribeUserGroups PostDescribeUserGroupsActionEnum = "DescribeUserGroups"
)

type PostDescribeUserGroupsVersionEnum string

const (
	PostDescribeUserGroupsVersionEnumTwoThousandAndFifteen0202 PostDescribeUserGroupsVersionEnum = "2015-02-02"
)

type PostDescribeUserGroupsQueryParams struct {
	Action     PostDescribeUserGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeUserGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeUserGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeUserGroupsRequest struct {
	QueryParams PostDescribeUserGroupsQueryParams
	Headers     PostDescribeUserGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeUserGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
