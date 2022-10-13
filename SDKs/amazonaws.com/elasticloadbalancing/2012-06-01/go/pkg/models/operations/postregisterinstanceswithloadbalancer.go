package operations

type PostRegisterInstancesWithLoadBalancerActionEnum string

const (
	PostRegisterInstancesWithLoadBalancerActionEnumRegisterInstancesWithLoadBalancer PostRegisterInstancesWithLoadBalancerActionEnum = "RegisterInstancesWithLoadBalancer"
)

type PostRegisterInstancesWithLoadBalancerVersionEnum string

const (
	PostRegisterInstancesWithLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostRegisterInstancesWithLoadBalancerVersionEnum = "2012-06-01"
)

type PostRegisterInstancesWithLoadBalancerQueryParams struct {
	Action  PostRegisterInstancesWithLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRegisterInstancesWithLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRegisterInstancesWithLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRegisterInstancesWithLoadBalancerRequest struct {
	QueryParams PostRegisterInstancesWithLoadBalancerQueryParams
	Headers     PostRegisterInstancesWithLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRegisterInstancesWithLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
