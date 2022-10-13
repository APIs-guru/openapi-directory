package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupsGetQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
	UserID *int32 `queryParam:"style=form,explode=true,name=userID"`
}

type UpdateGroupsGetRequest struct {
	QueryParams UpdateGroupsGetQueryParams
}

type UpdateGroupsGetResponse struct {
	APIModelsAPIError                             *shared.APIModelsAPIError
	APIPagedResponseUpdateSystemModelsUpdateGroup *shared.APIPagedResponseUpdateSystemModelsUpdateGroup
	ContentType                                   string
	StatusCode                                    int64
}
