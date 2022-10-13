package operations

type GetPutRolePermissionsBoundaryActionEnum string

const (
	GetPutRolePermissionsBoundaryActionEnumPutRolePermissionsBoundary GetPutRolePermissionsBoundaryActionEnum = "PutRolePermissionsBoundary"
)

type GetPutRolePermissionsBoundaryVersionEnum string

const (
	GetPutRolePermissionsBoundaryVersionEnumTwoThousandAndTen0508 GetPutRolePermissionsBoundaryVersionEnum = "2010-05-08"
)

type GetPutRolePermissionsBoundaryQueryParams struct {
	Action              GetPutRolePermissionsBoundaryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	PermissionsBoundary string                                   `queryParam:"style=form,explode=true,name=PermissionsBoundary"`
	RoleName            string                                   `queryParam:"style=form,explode=true,name=RoleName"`
	Version             GetPutRolePermissionsBoundaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutRolePermissionsBoundaryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPutRolePermissionsBoundaryRequest struct {
	QueryParams GetPutRolePermissionsBoundaryQueryParams
	Headers     GetPutRolePermissionsBoundaryHeaders
}

type GetPutRolePermissionsBoundaryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
