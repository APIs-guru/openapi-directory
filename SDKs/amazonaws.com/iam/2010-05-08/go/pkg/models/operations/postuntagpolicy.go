package operations

type PostUntagPolicyActionEnum string

const (
	PostUntagPolicyActionEnumUntagPolicy PostUntagPolicyActionEnum = "UntagPolicy"
)

type PostUntagPolicyVersionEnum string

const (
	PostUntagPolicyVersionEnumTwoThousandAndTen0508 PostUntagPolicyVersionEnum = "2010-05-08"
)

type PostUntagPolicyQueryParams struct {
	Action  PostUntagPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUntagPolicyRequest struct {
	QueryParams PostUntagPolicyQueryParams
	Headers     PostUntagPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
