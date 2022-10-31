package operations

type PostDeregisterInstancesFromLoadBalancerActionEnum string

const (
	PostDeregisterInstancesFromLoadBalancerActionEnumDeregisterInstancesFromLoadBalancer PostDeregisterInstancesFromLoadBalancerActionEnum = "DeregisterInstancesFromLoadBalancer"
)

type PostDeregisterInstancesFromLoadBalancerVersionEnum string

const (
	PostDeregisterInstancesFromLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostDeregisterInstancesFromLoadBalancerVersionEnum = "2012-06-01"
)

type PostDeregisterInstancesFromLoadBalancerQueryParams struct {
	Action  PostDeregisterInstancesFromLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeregisterInstancesFromLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeregisterInstancesFromLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeregisterInstancesFromLoadBalancerRequest struct {
	QueryParams PostDeregisterInstancesFromLoadBalancerQueryParams
	Headers     PostDeregisterInstancesFromLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeregisterInstancesFromLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
