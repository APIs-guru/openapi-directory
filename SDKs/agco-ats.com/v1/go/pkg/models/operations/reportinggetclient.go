package operations

import (
"openapi/pkg/models/shared")

type ReportingGetClientQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=ID"`
    
}

type ReportingGetClientRequest struct {
    QueryParams ReportingGetClientQueryParams 
    
}

type ReportingGetClientResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsClient *shared.UpdateSystemModelsClient 
    
}

