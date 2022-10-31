package operations



type SignUpdatePathParams struct {
    Job string `pathParam:"style=simple,explode=false,name=job"`
    
}

type SignUpdateRequest struct {
    PathParams SignUpdatePathParams 
    
}

type SignUpdateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

