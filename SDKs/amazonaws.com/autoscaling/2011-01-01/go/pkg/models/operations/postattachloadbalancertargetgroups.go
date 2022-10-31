package operations

type PostAttachLoadBalancerTargetGroupsActionEnum string

const (
	PostAttachLoadBalancerTargetGroupsActionEnumAttachLoadBalancerTargetGroups PostAttachLoadBalancerTargetGroupsActionEnum = "AttachLoadBalancerTargetGroups"
)

type PostAttachLoadBalancerTargetGroupsVersionEnum string

const (
	PostAttachLoadBalancerTargetGroupsVersionEnumTwoThousandAndEleven0101 PostAttachLoadBalancerTargetGroupsVersionEnum = "2011-01-01"
)

type PostAttachLoadBalancerTargetGroupsQueryParams struct {
	Action  PostAttachLoadBalancerTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachLoadBalancerTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachLoadBalancerTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAttachLoadBalancerTargetGroupsRequest struct {
	QueryParams PostAttachLoadBalancerTargetGroupsQueryParams
	Headers     PostAttachLoadBalancerTargetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachLoadBalancerTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
