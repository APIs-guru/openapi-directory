package operations

import (
	"openapi/pkg/models/shared"
)

type ClientsGetQueryParams struct {
	Tag    *string `queryParam:"style=form,explode=true,name=Tag"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type ClientsGetRequest struct {
	QueryParams ClientsGetQueryParams
}

type ClientsGetResponse struct {
	APIModelsAPIError                        *shared.APIModelsAPIError
	APIPagedResponseUpdateSystemModelsClient *shared.APIPagedResponseUpdateSystemModelsClient
	ContentType                              string
	StatusCode                               int64
}
