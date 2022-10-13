package operations

type PostDeletePolicyActionEnum string

const (
	PostDeletePolicyActionEnumDeletePolicy PostDeletePolicyActionEnum = "DeletePolicy"
)

type PostDeletePolicyVersionEnum string

const (
	PostDeletePolicyVersionEnumTwoThousandAndTen0508 PostDeletePolicyVersionEnum = "2010-05-08"
)

type PostDeletePolicyQueryParams struct {
	Action  PostDeletePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeletePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeletePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeletePolicyRequest struct {
	QueryParams PostDeletePolicyQueryParams
	Headers     PostDeletePolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeletePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
