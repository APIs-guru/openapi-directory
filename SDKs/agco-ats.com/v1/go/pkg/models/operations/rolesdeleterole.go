package operations

type RolesDeleteRolePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type RolesDeleteRoleRequest struct {
	PathParams RolesDeleteRolePathParams
}

type RolesDeleteRoleResponse struct {
	ContentType string
	StatusCode  int64
}
