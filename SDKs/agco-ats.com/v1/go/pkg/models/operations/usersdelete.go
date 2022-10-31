package operations



type UsersDeletePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UsersDeleteRequest struct {
    PathParams UsersDeletePathParams 
    
}

type UsersDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

