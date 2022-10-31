package operations

import (
"openapi/pkg/models/shared")

type AuthorizationCategoriesPutPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AuthorizationCategoriesPutRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    AuthorizationCodesSharedModelsCategory *shared.AuthorizationCodesSharedModelsCategory `request:"mediaType=application/json"`
    AuthorizationCodesSharedModelsCategory1 *shared.AuthorizationCodesSharedModelsCategory `request:"mediaType=application/x-www-form-urlencoded"`
    AuthorizationCodesSharedModelsCategory2 *shared.AuthorizationCodesSharedModelsCategory `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type AuthorizationCategoriesPutRequest struct {
    PathParams AuthorizationCategoriesPutPathParams 
    Request AuthorizationCategoriesPutRequests 
    
}

type AuthorizationCategoriesPutResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

