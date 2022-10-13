package operations

type PostPutIdentityPolicyActionEnum string

const (
	PostPutIdentityPolicyActionEnumPutIdentityPolicy PostPutIdentityPolicyActionEnum = "PutIdentityPolicy"
)

type PostPutIdentityPolicyVersionEnum string

const (
	PostPutIdentityPolicyVersionEnumTwoThousandAndTen1201 PostPutIdentityPolicyVersionEnum = "2010-12-01"
)

type PostPutIdentityPolicyQueryParams struct {
	Action  PostPutIdentityPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutIdentityPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutIdentityPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPutIdentityPolicyRequest struct {
	QueryParams PostPutIdentityPolicyQueryParams
	Headers     PostPutIdentityPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutIdentityPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
