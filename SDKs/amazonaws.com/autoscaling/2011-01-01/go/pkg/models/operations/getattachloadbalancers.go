package operations

type GetAttachLoadBalancersActionEnum string

const (
	GetAttachLoadBalancersActionEnumAttachLoadBalancers GetAttachLoadBalancersActionEnum = "AttachLoadBalancers"
)

type GetAttachLoadBalancersVersionEnum string

const (
	GetAttachLoadBalancersVersionEnumTwoThousandAndEleven0101 GetAttachLoadBalancersVersionEnum = "2011-01-01"
)

type GetAttachLoadBalancersQueryParams struct {
	Action               GetAttachLoadBalancersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                            `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	LoadBalancerNames    []string                          `queryParam:"style=form,explode=true,name=LoadBalancerNames"`
	Version              GetAttachLoadBalancersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAttachLoadBalancersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAttachLoadBalancersRequest struct {
	QueryParams GetAttachLoadBalancersQueryParams
	Headers     GetAttachLoadBalancersHeaders
}

type GetAttachLoadBalancersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
