package operations

import (
	"openapi/pkg/models/shared"
)

type RolesGetRolesQueryParams struct {
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RolesGetRolesRequest struct {
	QueryParams RolesGetRolesQueryParams
}

type RolesGetRolesResponse struct {
	APIPagedResponseAPIModelsRole *shared.APIPagedResponseAPIModelsRole
	ContentType                   string
	StatusCode                    int64
}
