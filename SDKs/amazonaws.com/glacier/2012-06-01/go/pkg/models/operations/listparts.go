package operations

import (
"openapi/pkg/models/shared")

type ListPartsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    UploadID string `pathParam:"style=simple,explode=false,name=uploadId"`
    VaultName string `pathParam:"style=simple,explode=false,name=vaultName"`
    
}

type ListPartsQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    
}

type ListPartsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListPartsRequest struct {
    PathParams ListPartsPathParams 
    QueryParams ListPartsQueryParams 
    Headers ListPartsHeaders 
    
}

type ListPartsResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ListPartsOutput *shared.ListPartsOutput 
    MissingParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

