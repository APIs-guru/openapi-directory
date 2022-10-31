package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationRequestsGetTranslationRequestsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type TranslationRequestsGetTranslationRequestsRequest struct {
	QueryParams TranslationRequestsGetTranslationRequestsQueryParams
}

type TranslationRequestsGetTranslationRequestsResponse struct {
	APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest *shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest
	APIModelsAPIError                                              *shared.APIModelsAPIError
	Body                                                           []byte
	ContentType                                                    string
	StatusCode                                                     int64
}
