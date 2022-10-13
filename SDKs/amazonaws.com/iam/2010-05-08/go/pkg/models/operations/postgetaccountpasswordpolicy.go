package operations

type PostGetAccountPasswordPolicyActionEnum string

const (
	PostGetAccountPasswordPolicyActionEnumGetAccountPasswordPolicy PostGetAccountPasswordPolicyActionEnum = "GetAccountPasswordPolicy"
)

type PostGetAccountPasswordPolicyVersionEnum string

const (
	PostGetAccountPasswordPolicyVersionEnumTwoThousandAndTen0508 PostGetAccountPasswordPolicyVersionEnum = "2010-05-08"
)

type PostGetAccountPasswordPolicyQueryParams struct {
	Action  PostGetAccountPasswordPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetAccountPasswordPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAccountPasswordPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetAccountPasswordPolicyRequest struct {
	QueryParams PostGetAccountPasswordPolicyQueryParams
	Headers     PostGetAccountPasswordPolicyHeaders
}

type PostGetAccountPasswordPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
