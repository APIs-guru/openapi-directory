package operations



type ContentSubmissionsDeleteContentSubmissionAttributePathParams struct {
    ContentSubmissionAttributeID int32 `pathParam:"style=simple,explode=false,name=contentSubmissionAttributeID"`
    
}

type ContentSubmissionsDeleteContentSubmissionAttributeRequest struct {
    PathParams ContentSubmissionsDeleteContentSubmissionAttributePathParams 
    
}

type ContentSubmissionsDeleteContentSubmissionAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

