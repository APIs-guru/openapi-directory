package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetQueryParams struct {
	Email    *string `queryParam:"style=form,explode=true,name=email"`
	HasRole  *string `queryParam:"style=form,explode=true,name=hasRole"`
	Limit    *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int32  `queryParam:"style=form,explode=true,name=offset"`
	Username *string `queryParam:"style=form,explode=true,name=username"`
}

type UsersGetRequest struct {
	QueryParams UsersGetQueryParams
}

type UsersGetResponse struct {
	APIPagedResponseAPIModelsUser *shared.APIPagedResponseAPIModelsUser
	ContentType                   string
	StatusCode                    int64
}
