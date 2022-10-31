package operations

import (
"openapi/pkg/models/shared")

type GetAPIV2ClientsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GetAPIV2ClientsIDRequest struct {
    PathParams GetAPIV2ClientsIDPathParams 
    
}

type GetAPIV2ClientsIDResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsClient *shared.UpdateSystemModelsClient 
    
}

