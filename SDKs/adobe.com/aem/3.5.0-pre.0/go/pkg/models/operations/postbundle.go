package operations



type PostBundlePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostBundleQueryParams struct {
    Action string `queryParam:"style=form,explode=true,name=action"`
    
}

type PostBundleRequest struct {
    PathParams PostBundlePathParams 
    QueryParams PostBundleQueryParams 
    
}

type PostBundleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

