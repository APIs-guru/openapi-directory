package operations

type GetDeleteRolePolicyActionEnum string

const (
	GetDeleteRolePolicyActionEnumDeleteRolePolicy GetDeleteRolePolicyActionEnum = "DeleteRolePolicy"
)

type GetDeleteRolePolicyVersionEnum string

const (
	GetDeleteRolePolicyVersionEnumTwoThousandAndTen0508 GetDeleteRolePolicyVersionEnum = "2010-05-08"
)

type GetDeleteRolePolicyQueryParams struct {
	Action     GetDeleteRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyName string                         `queryParam:"style=form,explode=true,name=PolicyName"`
	RoleName   string                         `queryParam:"style=form,explode=true,name=RoleName"`
	Version    GetDeleteRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteRolePolicyRequest struct {
	QueryParams GetDeleteRolePolicyQueryParams
	Headers     GetDeleteRolePolicyHeaders
}

type GetDeleteRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
