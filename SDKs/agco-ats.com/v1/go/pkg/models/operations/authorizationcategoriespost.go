package operations

import (
	"openapi/pkg/models/shared"
)

type AuthorizationCategoriesPostRequests struct {
	ApplicationXML                          []byte                                         `request:"mediaType=application/xml"`
	AuthorizationCodesSharedModelsCategory  *shared.AuthorizationCodesSharedModelsCategory `request:"mediaType=application/json"`
	AuthorizationCodesSharedModelsCategory1 *shared.AuthorizationCodesSharedModelsCategory `request:"mediaType=application/x-www-form-urlencoded"`
	AuthorizationCodesSharedModelsCategory2 *shared.AuthorizationCodesSharedModelsCategory `request:"mediaType=text/json"`
	TextXML                                 []byte                                         `request:"mediaType=text/xml"`
}

type AuthorizationCategoriesPostRequest struct {
	Request AuthorizationCategoriesPostRequests
}

type AuthorizationCategoriesPostResponse struct {
	APIModelsAPIError                                   *shared.APIModelsAPIError
	AuthorizationCategoriesPost200ApplicationJSONString *string
	AuthorizationCategoriesPost200ApplicationXMLString  *string
	AuthorizationCategoriesPost200TextJSONString        *string
	AuthorizationCategoriesPost200TextXMLString         *string
	Body                                                []byte
	ContentType                                         string
	StatusCode                                          int64
}
