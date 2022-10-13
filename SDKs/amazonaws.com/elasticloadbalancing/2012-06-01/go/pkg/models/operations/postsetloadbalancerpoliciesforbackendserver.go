package operations

type PostSetLoadBalancerPoliciesForBackendServerActionEnum string

const (
	PostSetLoadBalancerPoliciesForBackendServerActionEnumSetLoadBalancerPoliciesForBackendServer PostSetLoadBalancerPoliciesForBackendServerActionEnum = "SetLoadBalancerPoliciesForBackendServer"
)

type PostSetLoadBalancerPoliciesForBackendServerVersionEnum string

const (
	PostSetLoadBalancerPoliciesForBackendServerVersionEnumTwoThousandAndTwelve0601 PostSetLoadBalancerPoliciesForBackendServerVersionEnum = "2012-06-01"
)

type PostSetLoadBalancerPoliciesForBackendServerQueryParams struct {
	Action  PostSetLoadBalancerPoliciesForBackendServerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetLoadBalancerPoliciesForBackendServerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetLoadBalancerPoliciesForBackendServerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetLoadBalancerPoliciesForBackendServerRequest struct {
	QueryParams PostSetLoadBalancerPoliciesForBackendServerQueryParams
	Headers     PostSetLoadBalancerPoliciesForBackendServerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetLoadBalancerPoliciesForBackendServerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
