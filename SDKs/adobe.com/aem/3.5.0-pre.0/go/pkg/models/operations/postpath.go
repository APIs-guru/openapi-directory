package operations



type PostPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type PostPathQueryParams struct {
    Name string `queryParam:"style=form,explode=true,name=:name"`
    JcrPrimaryType string `queryParam:"style=form,explode=true,name=jcr:primaryType"`
    
}

type PostPathRequest struct {
    PathParams PostPathPathParams 
    QueryParams PostPathQueryParams 
    
}

type PostPathResponse struct {
    ContentType string 
    StatusCode int64 
    
}

