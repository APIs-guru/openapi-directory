package operations

type GetGetAccountPasswordPolicyActionEnum string

const (
	GetGetAccountPasswordPolicyActionEnumGetAccountPasswordPolicy GetGetAccountPasswordPolicyActionEnum = "GetAccountPasswordPolicy"
)

type GetGetAccountPasswordPolicyVersionEnum string

const (
	GetGetAccountPasswordPolicyVersionEnumTwoThousandAndTen0508 GetGetAccountPasswordPolicyVersionEnum = "2010-05-08"
)

type GetGetAccountPasswordPolicyQueryParams struct {
	Action  GetGetAccountPasswordPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetGetAccountPasswordPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetAccountPasswordPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetAccountPasswordPolicyRequest struct {
	QueryParams GetGetAccountPasswordPolicyQueryParams
	Headers     GetGetAccountPasswordPolicyHeaders
}

type GetGetAccountPasswordPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
