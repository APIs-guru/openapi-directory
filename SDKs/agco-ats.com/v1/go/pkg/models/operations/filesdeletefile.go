package operations



type FilesDeleteFilePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type FilesDeleteFileRequest struct {
    PathParams FilesDeleteFilePathParams 
    
}

type FilesDeleteFileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

