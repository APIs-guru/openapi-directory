package operations

import (
"openapi/pkg/models/shared")

type StringTranslationsGetTranslationsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    ModifiedAfterTimestamp *string `queryParam:"style=form,explode=true,name=modifiedAfterTimestamp"`
    
}

type StringTranslationsGetTranslationsRequest struct {
    QueryParams StringTranslationsGetTranslationsQueryParams 
    
}

type StringTranslationsGetTranslationsResponse struct {
    APIIPagedResponseGlobalResourcesSharedModelsStringTranslation *shared.APIIPagedResponseGlobalResourcesSharedModelsStringTranslation 
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

