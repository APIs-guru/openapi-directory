package operations

import (
	"openapi/pkg/models/shared"
)

type UserPermissionsGetPermissionsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UserPermissionsGetPermissionsQueryParams struct {
	Permission *string `queryParam:"style=form,explode=true,name=Permission"`
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type UserPermissionsGetPermissionsRequest struct {
	PathParams  UserPermissionsGetPermissionsPathParams
	QueryParams UserPermissionsGetPermissionsQueryParams
}

type UserPermissionsGetPermissionsResponse struct {
	APIModelsAPIError                                *shared.APIModelsAPIError
	APIPagedResponseAPIModelsUserEffectivePermission *shared.APIPagedResponseAPIModelsUserEffectivePermission
	ContentType                                      string
	StatusCode                                       int64
}
