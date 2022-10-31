package operations

import (
"openapi/pkg/models/shared")

type FilesPutFilePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type FilesPutFileRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    GlobalResourcesSharedModelsFileDownload *shared.GlobalResourcesSharedModelsFileDownload `request:"mediaType=application/json"`
    GlobalResourcesSharedModelsFileDownload1 *shared.GlobalResourcesSharedModelsFileDownload `request:"mediaType=application/x-www-form-urlencoded"`
    GlobalResourcesSharedModelsFileDownload2 *shared.GlobalResourcesSharedModelsFileDownload `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type FilesPutFileRequest struct {
    PathParams FilesPutFilePathParams 
    Request FilesPutFileRequests 
    
}

type FilesPutFileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

