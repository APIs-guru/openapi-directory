package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationSetsGetTranslationSetPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationSetsGetTranslationSetQueryParams struct {
	IncludeAttributes *string `queryParam:"style=form,explode=true,name=includeAttributes"`
}

type TranslationSetsGetTranslationSetRequest struct {
	PathParams  TranslationSetsGetTranslationSetPathParams
	QueryParams TranslationSetsGetTranslationSetQueryParams
}

type TranslationSetsGetTranslationSetResponse struct {
	APIModelsAPIError                         *shared.APIModelsAPIError
	Body                                      []byte
	ContentType                               string
	GlobalResourcesSharedModelsTranslationSet *shared.GlobalResourcesSharedModelsTranslationSet
	StatusCode                                int64
}
