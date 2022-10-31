package operations

import (
	"openapi/pkg/models/shared"
)

type TranslationRequestsUpdateTranslationRequestPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=Id"`
}

type TranslationRequestsUpdateTranslationRequestQueryParams struct {
	DoResendRequest *bool `queryParam:"style=form,explode=true,name=doResendRequest"`
}

type TranslationRequestsUpdateTranslationRequestRequests struct {
	ApplicationXML                                 []byte                                                `request:"mediaType=application/xml"`
	GlobalResourcesSharedModelsTranslationRequest  *shared.GlobalResourcesSharedModelsTranslationRequest `request:"mediaType=application/json"`
	GlobalResourcesSharedModelsTranslationRequest1 *shared.GlobalResourcesSharedModelsTranslationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	GlobalResourcesSharedModelsTranslationRequest2 *shared.GlobalResourcesSharedModelsTranslationRequest `request:"mediaType=text/json"`
	TextXML                                        []byte                                                `request:"mediaType=text/xml"`
}

type TranslationRequestsUpdateTranslationRequestRequest struct {
	PathParams  TranslationRequestsUpdateTranslationRequestPathParams
	QueryParams TranslationRequestsUpdateTranslationRequestQueryParams
	Request     TranslationRequestsUpdateTranslationRequestRequests
}

type TranslationRequestsUpdateTranslationRequestResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
