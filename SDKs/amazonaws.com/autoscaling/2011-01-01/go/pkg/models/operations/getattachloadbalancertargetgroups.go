package operations

type GetAttachLoadBalancerTargetGroupsActionEnum string

const (
	GetAttachLoadBalancerTargetGroupsActionEnumAttachLoadBalancerTargetGroups GetAttachLoadBalancerTargetGroupsActionEnum = "AttachLoadBalancerTargetGroups"
)

type GetAttachLoadBalancerTargetGroupsVersionEnum string

const (
	GetAttachLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 GetAttachLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

type GetAttachLoadBalancerTargetGroupsQueryParams struct {
	Action               GetAttachLoadBalancerTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                       `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	TargetGroupArNs      []string                                     `queryParam:"style=form,explode=true,name=TargetGroupARNs"`
	Version              GetAttachLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAttachLoadBalancerTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAttachLoadBalancerTargetGroupsRequest struct {
	QueryParams GetAttachLoadBalancerTargetGroupsQueryParams
	Headers     GetAttachLoadBalancerTargetGroupsHeaders
}

type GetAttachLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
