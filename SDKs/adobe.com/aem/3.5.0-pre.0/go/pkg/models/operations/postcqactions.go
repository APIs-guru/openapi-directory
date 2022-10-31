package operations



type PostCqActionsQueryParams struct {
    AuthorizableID string `queryParam:"style=form,explode=true,name=authorizableId"`
    Changelog string `queryParam:"style=form,explode=true,name=changelog"`
    
}

type PostCqActionsRequest struct {
    QueryParams PostCqActionsQueryParams 
    
}

type PostCqActionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

