package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationSetsGetSourceStringsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationSetsGetSourceStringsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type TranslationSetsGetSourceStringsRequest struct {
	PathParams  TranslationSetsGetSourceStringsPathParams
	QueryParams TranslationSetsGetSourceStringsQueryParams
}

type TranslationSetsGetSourceStringsResponse struct {
	APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString *shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString
	APIModelsAPIError                                                      *shared.APIModelsAPIError
	Body                                                                   []byte
	ContentType                                                            string
	StatusCode                                                             int64
}
