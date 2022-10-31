package operations



type PostJmxRepositoryPathParams struct {
    Action string `pathParam:"style=simple,explode=false,name=action"`
    
}

type PostJmxRepositoryRequest struct {
    PathParams PostJmxRepositoryPathParams 
    
}

type PostJmxRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

