package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationKeysUpdateTranslationKeyPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=ID"`
}

type TranslationKeysUpdateTranslationKeyRequests struct {
	ApplicationXML                        []byte                                       `request:"mediaType=application/xml"`
	OasSupportSharedModelsTranslationKey  *shared.OasSupportSharedModelsTranslationKey `request:"mediaType=application/json"`
	OasSupportSharedModelsTranslationKey1 *shared.OasSupportSharedModelsTranslationKey `request:"mediaType=application/x-www-form-urlencoded"`
	OasSupportSharedModelsTranslationKey2 *shared.OasSupportSharedModelsTranslationKey `request:"mediaType=text/json"`
	TextXML                               []byte                                       `request:"mediaType=text/xml"`
}

type TranslationKeysUpdateTranslationKeyRequest struct {
	PathParams TranslationKeysUpdateTranslationKeyPathParams
	Request    TranslationKeysUpdateTranslationKeyRequests
}

type TranslationKeysUpdateTranslationKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
