package operations

import (
	"openapi/pkg/models/shared"
)

type StringTranslationsUpdateTranslationPathParams struct {
	LanguageID int32  `pathParam:"style=simple,explode=false,name=languageId"`
	StringID   string `pathParam:"style=simple,explode=false,name=stringId"`
}

type StringTranslationsUpdateTranslationRequests struct {
	ApplicationXML                                []byte                                               `request:"mediaType=application/xml"`
	GlobalResourcesSharedModelsStringTranslation  *shared.GlobalResourcesSharedModelsStringTranslation `request:"mediaType=application/json"`
	GlobalResourcesSharedModelsStringTranslation1 *shared.GlobalResourcesSharedModelsStringTranslation `request:"mediaType=application/x-www-form-urlencoded"`
	GlobalResourcesSharedModelsStringTranslation2 *shared.GlobalResourcesSharedModelsStringTranslation `request:"mediaType=text/json"`
	TextXML                                       []byte                                               `request:"mediaType=text/xml"`
}

type StringTranslationsUpdateTranslationRequest struct {
	PathParams StringTranslationsUpdateTranslationPathParams
	Request    StringTranslationsUpdateTranslationRequests
}

type StringTranslationsUpdateTranslationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
