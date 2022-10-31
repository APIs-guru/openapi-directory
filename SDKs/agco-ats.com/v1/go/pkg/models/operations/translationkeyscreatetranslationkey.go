package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationKeysCreateTranslationKeyRequests struct {
	ApplicationXML                        []byte                                       `request:"mediaType=application/xml"`
	OasSupportSharedModelsTranslationKey  *shared.OasSupportSharedModelsTranslationKey `request:"mediaType=application/json"`
	OasSupportSharedModelsTranslationKey1 *shared.OasSupportSharedModelsTranslationKey `request:"mediaType=application/x-www-form-urlencoded"`
	OasSupportSharedModelsTranslationKey2 *shared.OasSupportSharedModelsTranslationKey `request:"mediaType=text/json"`
	TextXML                               []byte                                       `request:"mediaType=text/xml"`
}

type TranslationKeysCreateTranslationKeyRequest struct {
	Request TranslationKeysCreateTranslationKeyRequests
}

type TranslationKeysCreateTranslationKeyResponse struct {
	APIModelsAPIError                                                 *shared.APIModelsAPIError
	Body                                                              []byte
	ContentType                                                       string
	StatusCode                                                        int64
	TranslationKeysCreateTranslationKey200ApplicationJSONInt32Integer *int32
	TranslationKeysCreateTranslationKey200TextJSONInt32Integer        *int32
}
