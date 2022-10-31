package operations

import (
"openapi/pkg/models/shared")

type DownloadFileByIDPathParams struct {
    FileUUID string `pathParam:"style=simple,explode=false,name=fileUuid"`
    ItemUUID string `pathParam:"style=simple,explode=false,name=itemUuid"`
    VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
    
}

type DownloadFileByIDSecurity struct {
    ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DownloadFileByIDRequest struct {
    PathParams DownloadFileByIDPathParams 
    Security DownloadFileByIDSecurity 
    
}

type DownloadFileByIDResponse struct {
    ContentType string 
    DownloadFileByID200ApplicationOctetStreamBinaryString []byte 
    ErrorResponse *shared.ErrorResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

