package operations

type GetDetachLoadBalancerTargetGroupsActionEnum string

const (
	GetDetachLoadBalancerTargetGroupsActionEnumDetachLoadBalancerTargetGroups GetDetachLoadBalancerTargetGroupsActionEnum = "DetachLoadBalancerTargetGroups"
)

type GetDetachLoadBalancerTargetGroupsVersionEnum string

const (
	GetDetachLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 GetDetachLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

type GetDetachLoadBalancerTargetGroupsQueryParams struct {
	Action               GetDetachLoadBalancerTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                       `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	TargetGroupArNs      []string                                     `queryParam:"style=form,explode=true,name=TargetGroupARNs"`
	Version              GetDetachLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachLoadBalancerTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachLoadBalancerTargetGroupsRequest struct {
	QueryParams GetDetachLoadBalancerTargetGroupsQueryParams
	Headers     GetDetachLoadBalancerTargetGroupsHeaders
}

type GetDetachLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
