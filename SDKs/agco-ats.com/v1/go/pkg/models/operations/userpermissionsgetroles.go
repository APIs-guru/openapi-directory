package operations

import (
	"openapi/pkg/models/shared"
)

type UserPermissionsGetRolesPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UserPermissionsGetRolesQueryParams struct {
	Role   *string `queryParam:"style=form,explode=true,name=Role"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type UserPermissionsGetRolesRequest struct {
	PathParams  UserPermissionsGetRolesPathParams
	QueryParams UserPermissionsGetRolesQueryParams
}

type UserPermissionsGetRolesResponse struct {
	APIModelsAPIError             *shared.APIModelsAPIError
	APIPagedResponseAPIModelsRole *shared.APIPagedResponseAPIModelsRole
	ContentType                   string
	StatusCode                    int64
}
