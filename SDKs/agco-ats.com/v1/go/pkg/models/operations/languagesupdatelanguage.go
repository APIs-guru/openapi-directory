package operations

import (
	"openapi/pkg/models/shared"
)

type LanguagesUpdateLanguagePathParams struct {
	LocaleID int32 `pathParam:"style=simple,explode=false,name=LocaleID"`
}

type LanguagesUpdateLanguageRequests struct {
	ApplicationXML                       []byte                                      `request:"mediaType=application/xml"`
	GlobalResourcesSharedModelsLanguage  *shared.GlobalResourcesSharedModelsLanguage `request:"mediaType=application/json"`
	GlobalResourcesSharedModelsLanguage1 *shared.GlobalResourcesSharedModelsLanguage `request:"mediaType=application/x-www-form-urlencoded"`
	GlobalResourcesSharedModelsLanguage2 *shared.GlobalResourcesSharedModelsLanguage `request:"mediaType=text/json"`
	TextXML                              []byte                                      `request:"mediaType=text/xml"`
}

type LanguagesUpdateLanguageRequest struct {
	PathParams LanguagesUpdateLanguagePathParams
	Request    LanguagesUpdateLanguageRequests
}

type LanguagesUpdateLanguageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
