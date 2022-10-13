package operations

type GetDetachRolePolicyActionEnum string

const (
	GetDetachRolePolicyActionEnumDetachRolePolicy GetDetachRolePolicyActionEnum = "DetachRolePolicy"
)

type GetDetachRolePolicyVersionEnum string

const (
	GetDetachRolePolicyVersionEnumTwoThousandAndTen0508 GetDetachRolePolicyVersionEnum = "2010-05-08"
)

type GetDetachRolePolicyQueryParams struct {
	Action    GetDetachRolePolicyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PolicyArn string                         `queryParam:"style=form,explode=true,name=PolicyArn"`
	RoleName  string                         `queryParam:"style=form,explode=true,name=RoleName"`
	Version   GetDetachRolePolicyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachRolePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDetachRolePolicyRequest struct {
	QueryParams GetDetachRolePolicyQueryParams
	Headers     GetDetachRolePolicyHeaders
}

type GetDetachRolePolicyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
