package operations

type GetSetLoadBalancerPoliciesForBackendServerActionEnum string

const (
	GetSetLoadBalancerPoliciesForBackendServerActionEnumSetLoadBalancerPoliciesForBackendServer GetSetLoadBalancerPoliciesForBackendServerActionEnum = "SetLoadBalancerPoliciesForBackendServer"
)

type GetSetLoadBalancerPoliciesForBackendServerVersionEnum string

const (
	GetSetLoadBalancerPoliciesForBackendServerVersionEnumTwoThousandAndTwelve0601 GetSetLoadBalancerPoliciesForBackendServerVersionEnum = "2012-06-01"
)

type GetSetLoadBalancerPoliciesForBackendServerQueryParams struct {
	Action           GetSetLoadBalancerPoliciesForBackendServerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	InstancePort     int64                                                 `queryParam:"style=form,explode=true,name=InstancePort"`
	LoadBalancerName string                                                `queryParam:"style=form,explode=true,name=LoadBalancerName"`
	PolicyNames      []string                                              `queryParam:"style=form,explode=true,name=PolicyNames"`
	Version          GetSetLoadBalancerPoliciesForBackendServerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetLoadBalancerPoliciesForBackendServerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetLoadBalancerPoliciesForBackendServerRequest struct {
	QueryParams GetSetLoadBalancerPoliciesForBackendServerQueryParams
	Headers     GetSetLoadBalancerPoliciesForBackendServerHeaders
}

type GetSetLoadBalancerPoliciesForBackendServerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
