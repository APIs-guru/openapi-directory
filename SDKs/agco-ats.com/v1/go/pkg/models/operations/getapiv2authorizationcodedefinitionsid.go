package operations

import (
"openapi/pkg/models/shared")

type GetAPIV2AuthorizationCodeDefinitionsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIV2AuthorizationCodeDefinitionsIDRequest struct {
    PathParams GetAPIV2AuthorizationCodeDefinitionsIDPathParams 
    
}

type GetAPIV2AuthorizationCodeDefinitionsIDResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    AuthorizationCodesSharedModelsAuthorizationCodeDefinition *shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

