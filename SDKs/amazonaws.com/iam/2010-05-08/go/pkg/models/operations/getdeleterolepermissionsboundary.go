package operations

type GetDeleteRolePermissionsBoundaryActionEnum string

const (
	GetDeleteRolePermissionsBoundaryActionEnumDeleteRolePermissionsBoundary GetDeleteRolePermissionsBoundaryActionEnum = "DeleteRolePermissionsBoundary"
)

type GetDeleteRolePermissionsBoundaryVersionEnum string

const (
	GetDeleteRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508 GetDeleteRolePermissionsBoundaryVersionEnum = "2010-05-08"
)

type GetDeleteRolePermissionsBoundaryQueryParams struct {
	Action   GetDeleteRolePermissionsBoundaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RoleName string                                      `queryParam:"style=form,explode=true,name=RoleName"`
	Version  GetDeleteRolePermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteRolePermissionsBoundaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteRolePermissionsBoundaryRequest struct {
	QueryParams GetDeleteRolePermissionsBoundaryQueryParams
	Headers     GetDeleteRolePermissionsBoundaryHeaders
}

type GetDeleteRolePermissionsBoundaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
