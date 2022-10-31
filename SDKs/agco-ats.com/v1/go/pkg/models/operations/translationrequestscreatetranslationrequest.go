package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationRequestsCreateTranslationRequestRequests struct {
	ApplicationXML                                 []byte                                                `request:"mediaType=application/xml"`
	GlobalResourcesSharedModelsTranslationRequest  *shared.GlobalResourcesSharedModelsTranslationRequest `request:"mediaType=application/json"`
	GlobalResourcesSharedModelsTranslationRequest1 *shared.GlobalResourcesSharedModelsTranslationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	GlobalResourcesSharedModelsTranslationRequest2 *shared.GlobalResourcesSharedModelsTranslationRequest `request:"mediaType=text/json"`
	TextXML                                        []byte                                                `request:"mediaType=text/xml"`
}

type TranslationRequestsCreateTranslationRequestRequest struct {
	Request TranslationRequestsCreateTranslationRequestRequests
}

type TranslationRequestsCreateTranslationRequestResponse struct {
	APIModelsAPIError                                                         *shared.APIModelsAPIError
	Body                                                                      []byte
	ContentType                                                               string
	StatusCode                                                                int64
	TranslationRequestsCreateTranslationRequest200ApplicationJSONInt32Integer *int32
	TranslationRequestsCreateTranslationRequest200TextJSONInt32Integer        *int32
}
