package operations



type AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest struct {
    PathParams AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams 
    
}

type AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

