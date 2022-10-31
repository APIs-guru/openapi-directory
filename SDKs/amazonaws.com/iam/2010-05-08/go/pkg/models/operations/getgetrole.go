package operations

type GetGetRoleActionEnum string

const (
	GetGetRoleActionEnumGetRole GetGetRoleActionEnum = "GetRole"
)

type GetGetRoleVersionEnum string

const (
	GetGetRoleVersionEnumTwoThousandAndTen0508 GetGetRoleVersionEnum = "2010-05-08"
)

type GetGetRoleQueryParams struct {
	Action   GetGetRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RoleName string                `queryParam:"style=form,explode=true,name=RoleName"`
	Version  GetGetRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetRoleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetRoleRequest struct {
	QueryParams GetGetRoleQueryParams
	Headers     GetGetRoleHeaders
}

type GetGetRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
