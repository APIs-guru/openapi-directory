package operations

import (
"openapi/pkg/models/shared")

type FilesGetFilePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type FilesGetFileRequest struct {
    PathParams FilesGetFilePathParams 
    
}

type FilesGetFileResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    GlobalResourcesSharedModelsFileDownload *shared.GlobalResourcesSharedModelsFileDownload 
    StatusCode int64 
    
}

