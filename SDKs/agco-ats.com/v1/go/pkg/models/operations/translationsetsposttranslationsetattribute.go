package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationSetsPostTranslationSetAttributePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationSetsPostTranslationSetAttributeRequests struct {
	ApplicationXML                                      []byte                                                     `request:"mediaType=application/xml"`
	GlobalResourcesSharedModelsTranslationSetAttribute  *shared.GlobalResourcesSharedModelsTranslationSetAttribute `request:"mediaType=application/json"`
	GlobalResourcesSharedModelsTranslationSetAttribute1 *shared.GlobalResourcesSharedModelsTranslationSetAttribute `request:"mediaType=application/x-www-form-urlencoded"`
	GlobalResourcesSharedModelsTranslationSetAttribute2 *shared.GlobalResourcesSharedModelsTranslationSetAttribute `request:"mediaType=text/json"`
	TextXML                                             []byte                                                     `request:"mediaType=text/xml"`
}

type TranslationSetsPostTranslationSetAttributeRequest struct {
	PathParams TranslationSetsPostTranslationSetAttributePathParams
	Request    TranslationSetsPostTranslationSetAttributeRequests
}

type TranslationSetsPostTranslationSetAttributeResponse struct {
	APIModelsAPIError                                                        *shared.APIModelsAPIError
	Body                                                                     []byte
	ContentType                                                              string
	StatusCode                                                               int64
	TranslationSetsPostTranslationSetAttribute200ApplicationJSONInt32Integer *int32
	TranslationSetsPostTranslationSetAttribute200TextJSONInt32Integer        *int32
}
