package operations

type GetDeleteAccountPasswordPolicyActionEnum string

const (
	GetDeleteAccountPasswordPolicyActionEnumDeleteAccountPasswordPolicy GetDeleteAccountPasswordPolicyActionEnum = "DeleteAccountPasswordPolicy"
)

type GetDeleteAccountPasswordPolicyVersionEnum string

const (
	GetDeleteAccountPasswordPolicyVersionEnumTwoThousandAndTen0508 GetDeleteAccountPasswordPolicyVersionEnum = "2010-05-08"
)

type GetDeleteAccountPasswordPolicyQueryParams struct {
	Action  GetDeleteAccountPasswordPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDeleteAccountPasswordPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteAccountPasswordPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteAccountPasswordPolicyRequest struct {
	QueryParams GetDeleteAccountPasswordPolicyQueryParams
	Headers     GetDeleteAccountPasswordPolicyHeaders
}

type GetDeleteAccountPasswordPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
