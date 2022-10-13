package operations

type GetDeleteLoadBalancerActionEnum string

const (
	GetDeleteLoadBalancerActionEnumDeleteLoadBalancer GetDeleteLoadBalancerActionEnum = "DeleteLoadBalancer"
)

type GetDeleteLoadBalancerVersionEnum string

const (
	GetDeleteLoadBalancerVersionEnumTwoThousandAndFifteen1201 GetDeleteLoadBalancerVersionEnum = "2015-12-01"
)

type GetDeleteLoadBalancerQueryParams struct {
	Action          GetDeleteLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	LoadBalancerArn string                           `queryParam:"style=form,explode=true,name=LoadBalancerArn"`
	Version         GetDeleteLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteLoadBalancerRequest struct {
	QueryParams GetDeleteLoadBalancerQueryParams
	Headers     GetDeleteLoadBalancerHeaders
}

type GetDeleteLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
