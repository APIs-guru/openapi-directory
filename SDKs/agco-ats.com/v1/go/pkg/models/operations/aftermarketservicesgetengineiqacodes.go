package operations

import (
	"openapi/pkg/models/shared"
)

type AftermarketServicesGetEngineIqaCodesPathParams struct {
	SerialNumber string `pathParam:"style=simple,explode=false,name=serialNumber"`
}

type AftermarketServicesGetEngineIqaCodesQueryParams struct {
	EdtInstanceID string `queryParam:"style=form,explode=true,name=EDTInstanceId"`
}

type AftermarketServicesGetEngineIqaCodesRequest struct {
	PathParams  AftermarketServicesGetEngineIqaCodesPathParams
	QueryParams AftermarketServicesGetEngineIqaCodesQueryParams
}

type AftermarketServicesGetEngineIqaCodesResponse struct {
	APIModelsAPIError                                             *shared.APIModelsAPIError
	AftermarketServicesGetEngineIqaCodes200ApplicationJSONStrings []string
	AftermarketServicesGetEngineIqaCodes200TextJSONStrings        []string
	Body                                                          []byte
	ContentType                                                   string
	StatusCode                                                    int64
}
