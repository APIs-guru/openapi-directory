package operations



type PostSetPasswordQueryParams struct {
    Old string `queryParam:"style=form,explode=true,name=old"`
    Plain string `queryParam:"style=form,explode=true,name=plain"`
    Verify string `queryParam:"style=form,explode=true,name=verify"`
    
}

type PostSetPasswordRequest struct {
    QueryParams PostSetPasswordQueryParams 
    
}

type PostSetPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    PostSetPasswordDefaultTextPlainString *string 
    
}

