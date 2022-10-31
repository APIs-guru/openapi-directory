package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSystemGetCheckinQueryParams struct {
	ClientID string `queryParam:"style=form,explode=true,name=ClientID"`
	Preview  bool   `queryParam:"style=form,explode=true,name=Preview"`
}

type UpdateSystemGetCheckinRequest struct {
	QueryParams UpdateSystemGetCheckinQueryParams
}

type UpdateSystemGetCheckinResponse struct {
	APIModelsAPIError               *shared.APIModelsAPIError
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	UpdateSystemModelsCheckinResult *shared.UpdateSystemModelsCheckinResult
}
