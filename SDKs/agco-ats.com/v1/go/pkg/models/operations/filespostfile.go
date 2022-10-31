package operations

import (
"openapi/pkg/models/shared")

type FilesPostFileRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    GlobalResourcesSharedModelsFileDownload *shared.GlobalResourcesSharedModelsFileDownload `request:"mediaType=application/json"`
    GlobalResourcesSharedModelsFileDownload1 *shared.GlobalResourcesSharedModelsFileDownload `request:"mediaType=application/x-www-form-urlencoded"`
    GlobalResourcesSharedModelsFileDownload2 *shared.GlobalResourcesSharedModelsFileDownload `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type FilesPostFileRequest struct {
    Request FilesPostFileRequests 
    
}

type FilesPostFileResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    FilesPostFile200ApplicationJSONString *string 
    FilesPostFile200ApplicationXMLString *string 
    FilesPostFile200TextJSONString *string 
    FilesPostFile200TextXMLString *string 
    StatusCode int64 
    
}

