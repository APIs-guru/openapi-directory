package operations

import (
"openapi/pkg/models/shared")

type AftermarketServicesGetProductionDataPathParams struct {
    SerialNumber string `pathParam:"style=simple,explode=false,name=serialNumber"`
    
}

type AftermarketServicesGetProductionDataQueryParams struct {
    EdtInstanceID string `queryParam:"style=form,explode=true,name=EDTInstanceId"`
    
}

type AftermarketServicesGetProductionDataRequest struct {
    PathParams AftermarketServicesGetProductionDataPathParams 
    QueryParams AftermarketServicesGetProductionDataQueryParams 
    
}

type AftermarketServicesGetProductionDataResponse struct {
    AgcoPowerServicesModelsProductionData []shared.AgcoPowerServicesModelsProductionData 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

