package operations

type PostDetachLoadBalancerTargetGroupsActionEnum string

const (
	PostDetachLoadBalancerTargetGroupsActionEnumDetachLoadBalancerTargetGroups PostDetachLoadBalancerTargetGroupsActionEnum = "DetachLoadBalancerTargetGroups"
)

type PostDetachLoadBalancerTargetGroupsVersionEnum string

const (
	PostDetachLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 PostDetachLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

type PostDetachLoadBalancerTargetGroupsQueryParams struct {
	Action  PostDetachLoadBalancerTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachLoadBalancerTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDetachLoadBalancerTargetGroupsRequest struct {
	QueryParams PostDetachLoadBalancerTargetGroupsQueryParams
	Headers     PostDetachLoadBalancerTargetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
