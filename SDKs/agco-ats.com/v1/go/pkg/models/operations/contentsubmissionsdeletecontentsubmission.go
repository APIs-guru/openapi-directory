package operations



type ContentSubmissionsDeleteContentSubmissionPathParams struct {
    ContentSubmissionID int32 `pathParam:"style=simple,explode=false,name=contentSubmissionID"`
    
}

type ContentSubmissionsDeleteContentSubmissionRequest struct {
    PathParams ContentSubmissionsDeleteContentSubmissionPathParams 
    
}

type ContentSubmissionsDeleteContentSubmissionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

