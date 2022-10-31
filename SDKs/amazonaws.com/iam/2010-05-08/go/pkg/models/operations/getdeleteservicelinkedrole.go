package operations

type GetDeleteServiceLinkedRoleActionEnum string

const (
	GetDeleteServiceLinkedRoleActionEnumDeleteServiceLinkedRole GetDeleteServiceLinkedRoleActionEnum = "DeleteServiceLinkedRole"
)

type GetDeleteServiceLinkedRoleVersionEnum string

const (
	GetDeleteServiceLinkedRoleVersionEnumTwoThousandAndTen0508 GetDeleteServiceLinkedRoleVersionEnum = "2010-05-08"
)

type GetDeleteServiceLinkedRoleQueryParams struct {
	Action   GetDeleteServiceLinkedRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RoleName string                                `queryParam:"style=form,explode=true,name=RoleName"`
	Version  GetDeleteServiceLinkedRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteServiceLinkedRoleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteServiceLinkedRoleRequest struct {
	QueryParams GetDeleteServiceLinkedRoleQueryParams
	Headers     GetDeleteServiceLinkedRoleHeaders
}

type GetDeleteServiceLinkedRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
