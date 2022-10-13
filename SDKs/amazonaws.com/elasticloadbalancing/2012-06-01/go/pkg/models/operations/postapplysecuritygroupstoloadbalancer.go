package operations

type PostApplySecurityGroupsToLoadBalancerActionEnum string

const (
	PostApplySecurityGroupsToLoadBalancerActionEnumApplySecurityGroupsToLoadBalancer PostApplySecurityGroupsToLoadBalancerActionEnum = "ApplySecurityGroupsToLoadBalancer"
)

type PostApplySecurityGroupsToLoadBalancerVersionEnum string

const (
	PostApplySecurityGroupsToLoadBalancerVersionEnumTwoThousandAndTwelve0601 PostApplySecurityGroupsToLoadBalancerVersionEnum = "2012-06-01"
)

type PostApplySecurityGroupsToLoadBalancerQueryParams struct {
	Action  PostApplySecurityGroupsToLoadBalancerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostApplySecurityGroupsToLoadBalancerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostApplySecurityGroupsToLoadBalancerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostApplySecurityGroupsToLoadBalancerRequest struct {
	QueryParams PostApplySecurityGroupsToLoadBalancerQueryParams
	Headers     PostApplySecurityGroupsToLoadBalancerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostApplySecurityGroupsToLoadBalancerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
