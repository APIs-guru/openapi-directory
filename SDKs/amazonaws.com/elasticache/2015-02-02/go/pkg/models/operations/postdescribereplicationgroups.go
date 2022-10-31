package operations

type PostDescribeReplicationGroupsActionEnum string

const (
	PostDescribeReplicationGroupsActionEnumDescribeReplicationGroups PostDescribeReplicationGroupsActionEnum = "DescribeReplicationGroups"
)

type PostDescribeReplicationGroupsVersionEnum string

const (
	PostDescribeReplicationGroupsVersionEnumTwoThousandAndFifteen0202 PostDescribeReplicationGroupsVersionEnum = "2015-02-02"
)

type PostDescribeReplicationGroupsQueryParams struct {
	Action     PostDescribeReplicationGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeReplicationGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReplicationGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeReplicationGroupsRequest struct {
	QueryParams PostDescribeReplicationGroupsQueryParams
	Headers     PostDescribeReplicationGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReplicationGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
