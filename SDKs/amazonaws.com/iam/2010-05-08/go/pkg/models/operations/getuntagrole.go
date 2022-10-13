package operations

type GetUntagRoleActionEnum string

const (
	GetUntagRoleActionEnumUntagRole GetUntagRoleActionEnum = "UntagRole"
)

type GetUntagRoleVersionEnum string

const (
	GetUntagRoleVersionEnumTwoThousandAndTen0508 GetUntagRoleVersionEnum = "2010-05-08"
)

type GetUntagRoleQueryParams struct {
	Action   GetUntagRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RoleName string                  `queryParam:"style=form,explode=true,name=RoleName"`
	TagKeys  []string                `queryParam:"style=form,explode=true,name=TagKeys"`
	Version  GetUntagRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagRoleRequest struct {
	QueryParams GetUntagRoleQueryParams
	Headers     GetUntagRoleHeaders
}

type GetUntagRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
