package operations



type AuthorizationCategoriesRemoveUserPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID int32 `pathParam:"style=simple,explode=false,name=userID"`
    
}

type AuthorizationCategoriesRemoveUserRequest struct {
    PathParams AuthorizationCategoriesRemoveUserPathParams 
    
}

type AuthorizationCategoriesRemoveUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

