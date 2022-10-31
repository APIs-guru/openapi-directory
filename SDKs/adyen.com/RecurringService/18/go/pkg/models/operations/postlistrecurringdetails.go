package operations



type PostListRecurringDetailsRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostListRecurringDetailsResponse struct {
    ContentType string 
    RecurringDetailsResult *interface{} 
    StatusCode int64 
    
}

