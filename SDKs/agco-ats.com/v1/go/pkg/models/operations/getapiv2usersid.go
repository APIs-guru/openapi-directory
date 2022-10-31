package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV2UsersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAPIV2UsersIDRequest struct {
	PathParams GetAPIV2UsersIDPathParams
}

type GetAPIV2UsersIDResponse struct {
	APIModelsUser *shared.APIModelsUser
	Body          []byte
	ContentType   string
	StatusCode    int64
}
