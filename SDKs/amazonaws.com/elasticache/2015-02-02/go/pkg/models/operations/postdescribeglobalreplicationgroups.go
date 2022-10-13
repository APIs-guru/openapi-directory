package operations

type PostDescribeGlobalReplicationGroupsActionEnum string

const (
	PostDescribeGlobalReplicationGroupsActionEnumDescribeGlobalReplicationGroups PostDescribeGlobalReplicationGroupsActionEnum = "DescribeGlobalReplicationGroups"
)

type PostDescribeGlobalReplicationGroupsVersionEnum string

const (
	PostDescribeGlobalReplicationGroupsVersionEnumTwoThousandAndFifteen0202 PostDescribeGlobalReplicationGroupsVersionEnum = "2015-02-02"
)

type PostDescribeGlobalReplicationGroupsQueryParams struct {
	Action     PostDescribeGlobalReplicationGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeGlobalReplicationGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeGlobalReplicationGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeGlobalReplicationGroupsRequest struct {
	QueryParams PostDescribeGlobalReplicationGroupsQueryParams
	Headers     PostDescribeGlobalReplicationGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeGlobalReplicationGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
