package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationSetsGetTranslationSetStringsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationSetsGetTranslationSetStringsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type TranslationSetsGetTranslationSetStringsRequest struct {
	PathParams  TranslationSetsGetTranslationSetStringsPathParams
	QueryParams TranslationSetsGetTranslationSetStringsQueryParams
}

type TranslationSetsGetTranslationSetStringsResponse struct {
	APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString *shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString
	APIModelsAPIError                                                *shared.APIModelsAPIError
	Body                                                             []byte
	ContentType                                                      string
	StatusCode                                                       int64
}
