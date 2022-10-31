package operations



type PostDisableRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostDisableResponse struct {
    ContentType string 
    DisableResult *interface{} 
    StatusCode int64 
    
}

