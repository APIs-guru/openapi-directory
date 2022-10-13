package operations

type PostModifyLoadBalancerAttributesActionEnum string

const (
	PostModifyLoadBalancerAttributesActionEnumModifyLoadBalancerAttributes PostModifyLoadBalancerAttributesActionEnum = "ModifyLoadBalancerAttributes"
)

type PostModifyLoadBalancerAttributesVersionEnum string

const (
	PostModifyLoadBalancerAttributesVersionEnumTwoThousandAndTwelve0601 PostModifyLoadBalancerAttributesVersionEnum = "2012-06-01"
)

type PostModifyLoadBalancerAttributesQueryParams struct {
	Action  PostModifyLoadBalancerAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyLoadBalancerAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyLoadBalancerAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyLoadBalancerAttributesRequest struct {
	QueryParams PostModifyLoadBalancerAttributesQueryParams
	Headers     PostModifyLoadBalancerAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyLoadBalancerAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
