package operations

type PostDeleteLoadBalancerActionEnum string

const (
	PostDeleteLoadBalancerActionEnumDeleteLoadBalancer PostDeleteLoadBalancerActionEnum = "DeleteLoadBalancer"
)

type PostDeleteLoadBalancerVersionEnum string

const (
	PostDeleteLoadBalancerVersionEnumTwoThousandAndFifteen1201 PostDeleteLoadBalancerVersionEnum = "2015-12-01"
)

type PostDeleteLoadBalancerQueryParams struct {
	Action  PostDeleteLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteLoadBalancerRequest struct {
	QueryParams PostDeleteLoadBalancerQueryParams
	Headers     PostDeleteLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
