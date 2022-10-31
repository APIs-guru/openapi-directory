package operations

import (
"openapi/pkg/models/shared")

type FilesGetFileContentsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type FilesGetFileContentsRequest struct {
    PathParams FilesGetFileContentsPathParams 
    
}

type FilesGetFileContentsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

