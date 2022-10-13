package operations

type PostGetUserPolicyActionEnum string

const (
	PostGetUserPolicyActionEnumGetUserPolicy PostGetUserPolicyActionEnum = "GetUserPolicy"
)

type PostGetUserPolicyVersionEnum string

const (
	PostGetUserPolicyVersionEnumTwoThousandAndTen0508 PostGetUserPolicyVersionEnum = "2010-05-08"
)

type PostGetUserPolicyQueryParams struct {
	Action  PostGetUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetUserPolicyRequest struct {
	QueryParams PostGetUserPolicyQueryParams
	Headers     PostGetUserPolicyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
