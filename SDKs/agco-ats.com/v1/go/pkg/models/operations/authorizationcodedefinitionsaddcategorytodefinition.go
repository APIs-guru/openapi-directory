package operations



type AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    CategoryID string `pathParam:"style=simple,explode=false,name=categoryID"`
    
}

type AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest struct {
    PathParams AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams 
    
}

type AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

