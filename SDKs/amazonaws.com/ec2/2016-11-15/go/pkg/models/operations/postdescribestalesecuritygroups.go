package operations

type PostDescribeStaleSecurityGroupsActionEnum string

const (
	PostDescribeStaleSecurityGroupsActionEnumDescribeStaleSecurityGroups PostDescribeStaleSecurityGroupsActionEnum = "DescribeStaleSecurityGroups"
)

type PostDescribeStaleSecurityGroupsVersionEnum string

const (
	PostDescribeStaleSecurityGroupsVersionEnumTwoThousandAndSixteen1115 PostDescribeStaleSecurityGroupsVersionEnum = "2016-11-15"
)

type PostDescribeStaleSecurityGroupsQueryParams struct {
	Action     PostDescribeStaleSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                    `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                    `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeStaleSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeStaleSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeStaleSecurityGroupsRequest struct {
	QueryParams PostDescribeStaleSecurityGroupsQueryParams
	Headers     PostDescribeStaleSecurityGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeStaleSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
