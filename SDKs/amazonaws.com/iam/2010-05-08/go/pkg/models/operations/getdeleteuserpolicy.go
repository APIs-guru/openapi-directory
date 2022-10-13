package operations

type GetDeleteUserPolicyActionEnum string

const (
	GetDeleteUserPolicyActionEnumDeleteUserPolicy GetDeleteUserPolicyActionEnum = "DeleteUserPolicy"
)

type GetDeleteUserPolicyVersionEnum string

const (
	GetDeleteUserPolicyVersionEnumTwoThousandAndTen0508 GetDeleteUserPolicyVersionEnum = "2010-05-08"
)

type GetDeleteUserPolicyQueryParams struct {
	Action     GetDeleteUserPolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyName string                         `queryParam:"style=form,explode=true,name=PolicyName"`
	UserName   string                         `queryParam:"style=form,explode=true,name=UserName"`
	Version    GetDeleteUserPolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteUserPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteUserPolicyRequest struct {
	QueryParams GetDeleteUserPolicyQueryParams
	Headers     GetDeleteUserPolicyHeaders
}

type GetDeleteUserPolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
