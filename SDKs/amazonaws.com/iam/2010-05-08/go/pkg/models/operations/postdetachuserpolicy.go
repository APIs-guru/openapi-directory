package operations

type PostDetachUserPolicyActionEnum string

const (
	PostDetachUserPolicyActionEnumDetachUserPolicy PostDetachUserPolicyActionEnum = "DetachUserPolicy"
)

type PostDetachUserPolicyVersionEnum string

const (
	PostDetachUserPolicyVersionEnumTwoThousandAndTen0508 PostDetachUserPolicyVersionEnum = "2010-05-08"
)

type PostDetachUserPolicyQueryParams struct {
	Action  PostDetachUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachUserPolicyRequest struct {
	QueryParams PostDetachUserPolicyQueryParams
	Headers     PostDetachUserPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
