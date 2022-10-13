package operations

type PostDescribeAutoScalingGroupsActionEnum string

const (
	PostDescribeAutoScalingGroupsActionEnumDescribeAutoScalingGroups PostDescribeAutoScalingGroupsActionEnum = "DescribeAutoScalingGroups"
)

type PostDescribeAutoScalingGroupsVersionEnum string

const (
	PostDescribeAutoScalingGroupsVersionEnumTwoThousandAndEleven0101 PostDescribeAutoScalingGroupsVersionEnum = "2011-01-01"
)

type PostDescribeAutoScalingGroupsQueryParams struct {
	Action     PostDescribeAutoScalingGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxRecords *string                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken  *string                                  `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeAutoScalingGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAutoScalingGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeAutoScalingGroupsRequest struct {
	QueryParams PostDescribeAutoScalingGroupsQueryParams
	Headers     PostDescribeAutoScalingGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAutoScalingGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
