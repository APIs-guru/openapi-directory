package operations

type GetDescribeStaleSecurityGroupsActionEnum string

const (
	GetDescribeStaleSecurityGroupsActionEnumDescribeStaleSecurityGroups GetDescribeStaleSecurityGroupsActionEnum = "DescribeStaleSecurityGroups"
)

type GetDescribeStaleSecurityGroupsVersionEnum string

const (
	GetDescribeStaleSecurityGroupsVersionEnumTwoThousandAndSixteen1115 GetDescribeStaleSecurityGroupsVersionEnum = "2016-11-15"
)

type GetDescribeStaleSecurityGroupsQueryParams struct {
	Action     GetDescribeStaleSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                                     `queryParam:"style=form,explode=true,name=DryRun"`
	MaxResults *int64                                    `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                   `queryParam:"style=form,explode=true,name=NextToken"`
	Version    GetDescribeStaleSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID      string                                    `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDescribeStaleSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeStaleSecurityGroupsRequest struct {
	QueryParams GetDescribeStaleSecurityGroupsQueryParams
	Headers     GetDescribeStaleSecurityGroupsHeaders
}

type GetDescribeStaleSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
