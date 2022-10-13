package operations

import (
	"openapi/pkg/models/shared"
)

type PermissionsGetPermissionsQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type PermissionsGetPermissionsRequest struct {
	QueryParams PermissionsGetPermissionsQueryParams
}

type PermissionsGetPermissionsResponse struct {
	APIPagedResponseAPIModelsPermission *shared.APIPagedResponseAPIModelsPermission
	ContentType                         string
	StatusCode                          int64
}
