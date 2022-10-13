package operations

import (
	"openapi/pkg/models/shared"
)

type AftermarketServicesUpdateUserStatusRequests struct {
	AgcoPowerServicesModelsUserStatus  *shared.AgcoPowerServicesModelsUserStatus `request:"mediaType=application/json"`
	AgcoPowerServicesModelsUserStatus1 *shared.AgcoPowerServicesModelsUserStatus `request:"mediaType=application/x-www-form-urlencoded"`
	AgcoPowerServicesModelsUserStatus2 *shared.AgcoPowerServicesModelsUserStatus `request:"mediaType=text/json"`
	ApplicationXML                     []byte                                    `request:"mediaType=application/xml"`
	TextXML                            []byte                                    `request:"mediaType=text/xml"`
}

type AftermarketServicesUpdateUserStatusRequest struct {
	Request AftermarketServicesUpdateUserStatusRequests
}

type AftermarketServicesUpdateUserStatusResponse struct {
	APIModelsAPIError                                            *shared.APIModelsAPIError
	AftermarketServicesUpdateUserStatus200ApplicationJSONBoolean *bool
	AftermarketServicesUpdateUserStatus200TextJSONBoolean        *bool
	Body                                                         []byte
	ContentType                                                  string
	StatusCode                                                   int64
}
