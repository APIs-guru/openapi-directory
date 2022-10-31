package operations

type PermissionsDeletePermissionPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PermissionsDeletePermissionRequest struct {
	PathParams PermissionsDeletePermissionPathParams
}

type PermissionsDeletePermissionResponse struct {
	ContentType string
	StatusCode  int64
}
