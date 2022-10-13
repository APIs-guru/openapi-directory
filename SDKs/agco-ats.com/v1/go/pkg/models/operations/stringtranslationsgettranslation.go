package operations

import (
	"openapi/pkg/models/shared"
)

type StringTranslationsGetTranslationPathParams struct {
	LanguageID int32  `pathParam:"style=simple,explode=false,name=languageId"`
	StringID   string `pathParam:"style=simple,explode=false,name=stringId"`
}

type StringTranslationsGetTranslationRequest struct {
	PathParams StringTranslationsGetTranslationPathParams
}

type StringTranslationsGetTranslationResponse struct {
	APIModelsAPIError                            *shared.APIModelsAPIError
	Body                                         []byte
	ContentType                                  string
	GlobalResourcesSharedModelsStringTranslation *shared.GlobalResourcesSharedModelsStringTranslation
	StatusCode                                   int64
}
