package operations

import (
	"openapi/pkg/models/shared"
)

type AftermarketServicesPutEcuPathParams struct {
	SerialNumber string `pathParam:"style=simple,explode=false,name=serialNumber"`
}

type AftermarketServicesPutEcuQueryParams struct {
	EdtInstanceID string `queryParam:"style=form,explode=true,name=EDTInstanceId"`
}

type AftermarketServicesPutEcuRequests struct {
	AgcoPowerServicesModelsEcu  *shared.AgcoPowerServicesModelsEcu `request:"mediaType=application/json"`
	AgcoPowerServicesModelsEcu1 *shared.AgcoPowerServicesModelsEcu `request:"mediaType=application/x-www-form-urlencoded"`
	AgcoPowerServicesModelsEcu2 *shared.AgcoPowerServicesModelsEcu `request:"mediaType=text/json"`
	ApplicationXML              []byte                             `request:"mediaType=application/xml"`
	TextXML                     []byte                             `request:"mediaType=text/xml"`
}

type AftermarketServicesPutEcuRequest struct {
	PathParams  AftermarketServicesPutEcuPathParams
	QueryParams AftermarketServicesPutEcuQueryParams
	Request     AftermarketServicesPutEcuRequests
}

type AftermarketServicesPutEcuResponse struct {
	AgcoPowerServicesModelsEcu *shared.AgcoPowerServicesModelsEcu
	APIModelsAPIError          *shared.APIModelsAPIError
	Body                       []byte
	ContentType                string
	StatusCode                 int64
}
