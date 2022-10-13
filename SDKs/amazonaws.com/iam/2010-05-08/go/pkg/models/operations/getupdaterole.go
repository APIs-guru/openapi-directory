package operations

type GetUpdateRoleActionEnum string

const (
	GetUpdateRoleActionEnumUpdateRole GetUpdateRoleActionEnum = "UpdateRole"
)

type GetUpdateRoleVersionEnum string

const (
	GetUpdateRoleVersionEnumTwoThousandAndTen0508 GetUpdateRoleVersionEnum = "2010-05-08"
)

type GetUpdateRoleQueryParams struct {
	Action             GetUpdateRoleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Description        *string                  `queryParam:"style=form,explode=true,name=Description"`
	MaxSessionDuration *int64                   `queryParam:"style=form,explode=true,name=MaxSessionDuration"`
	RoleName           string                   `queryParam:"style=form,explode=true,name=RoleName"`
	Version            GetUpdateRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateRoleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateRoleRequest struct {
	QueryParams GetUpdateRoleQueryParams
	Headers     GetUpdateRoleHeaders
}

type GetUpdateRoleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
