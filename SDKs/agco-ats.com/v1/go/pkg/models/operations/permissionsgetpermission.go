package operations

import (
	"openapi/pkg/models/shared"
)

type PermissionsGetPermissionPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PermissionsGetPermissionRequest struct {
	PathParams PermissionsGetPermissionPathParams
}

type PermissionsGetPermissionResponse struct {
	APIModelsPermission *shared.APIModelsPermission
	Body                []byte
	ContentType         string
	StatusCode          int64
}
