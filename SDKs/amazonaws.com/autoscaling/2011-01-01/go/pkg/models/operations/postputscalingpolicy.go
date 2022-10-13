package operations

type PostPutScalingPolicyActionEnum string

const (
	PostPutScalingPolicyActionEnumPutScalingPolicy PostPutScalingPolicyActionEnum = "PutScalingPolicy"
)

type PostPutScalingPolicyVersionEnum string

const (
	PostPutScalingPolicyVersionEnumTwoThousandAndEleven0101 PostPutScalingPolicyVersionEnum = "2011-01-01"
)

type PostPutScalingPolicyQueryParams struct {
	Action  PostPutScalingPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutScalingPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutScalingPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutScalingPolicyRequest struct {
	QueryParams PostPutScalingPolicyQueryParams
	Headers     PostPutScalingPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutScalingPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
