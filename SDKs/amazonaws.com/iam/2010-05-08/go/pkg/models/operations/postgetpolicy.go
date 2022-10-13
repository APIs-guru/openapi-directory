package operations

type PostGetPolicyActionEnum string

const (
	PostGetPolicyActionEnumGetPolicy PostGetPolicyActionEnum = "GetPolicy"
)

type PostGetPolicyVersionEnum string

const (
	PostGetPolicyVersionEnumTwoThousandAndTen0508 PostGetPolicyVersionEnum = "2010-05-08"
)

type PostGetPolicyQueryParams struct {
	Action  PostGetPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetPolicyRequest struct {
	QueryParams PostGetPolicyQueryParams
	Headers     PostGetPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
