package operations

import (
"openapi/pkg/models/shared")

type AuthorizationCodesValidateAuthorizationCodePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type AuthorizationCodesValidateAuthorizationCodeRequest struct {
    PathParams AuthorizationCodesValidateAuthorizationCodePathParams 
    
}

type AuthorizationCodesValidateAuthorizationCodeResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    AuthorizationCodesSharedModelsCodeValidationModel *shared.AuthorizationCodesSharedModelsCodeValidationModel 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

