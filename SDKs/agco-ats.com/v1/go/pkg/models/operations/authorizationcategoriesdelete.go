package operations



type AuthorizationCategoriesDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AuthorizationCategoriesDeleteRequest struct {
    PathParams AuthorizationCategoriesDeletePathParams 
    
}

type AuthorizationCategoriesDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

