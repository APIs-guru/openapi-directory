package operations

type GetDescribeLoadBalancerTargetGroupsActionEnum string

const (
	GetDescribeLoadBalancerTargetGroupsActionEnumDescribeLoadBalancerTargetGroups GetDescribeLoadBalancerTargetGroupsActionEnum = "DescribeLoadBalancerTargetGroups"
)

type GetDescribeLoadBalancerTargetGroupsVersionEnum string

const (
	GetDescribeLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 GetDescribeLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

type GetDescribeLoadBalancerTargetGroupsQueryParams struct {
	Action               GetDescribeLoadBalancerTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                         `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	MaxRecords           *int64                                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	NextToken            *string                                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version              GetDescribeLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeLoadBalancerTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeLoadBalancerTargetGroupsRequest struct {
	QueryParams GetDescribeLoadBalancerTargetGroupsQueryParams
	Headers     GetDescribeLoadBalancerTargetGroupsHeaders
}

type GetDescribeLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
